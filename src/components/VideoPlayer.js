function VideoPlayer(params) {
  return (
    <iframe
      width="560"
      height="315"
      src={params.url}
      title="Google Drive Video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
}

export default VideoPlayer;