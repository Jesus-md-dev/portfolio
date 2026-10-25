// Service Worker for PWA functionality
// Strategy: network-first for HTML (so a new deploy is always picked up),
// cache-first for hashed static assets (safe: Vite content-hashes filenames,
// so a cached asset is either correct or simply unused after the next build).
const CACHE_NAME = 'jesus-marquez-cv-v2';

// The same URL can be fetched twice at once (the prerendered HTML and then the
// app request the same images); the second put then fails with "Entry already
// exists", which is harmless.
const cachePut = (request, response) =>
  caches.open(CACHE_NAME).then((cache) => cache.put(request, response)).catch(() => {});

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          cachePut(request, responseClone);
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match('/')))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }
      return fetch(request).then((response) => {
        const responseClone = response.clone();
        cachePut(request, responseClone);
        return response;
      });
    })
  );
});
