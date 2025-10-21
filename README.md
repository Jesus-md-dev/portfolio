# Jesús Márquez Delgado - Curriculum Vitae

Una aplicación web moderna y responsiva desarrollada con React que presenta mi CV profesional de manera interactiva.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- **Interfaz Moderna**: Utiliza Material-UI y Tailwind CSS para un diseño profesional
- **Navegación por Pestañas**: Organizado en secciones (CV, Webs, Games, AR/VR)
- **Performance Optimizada**: Lazy loading, React.memo y code splitting
- **Accesibilidad**: Implementa estándares ARIA y navegación por teclado
- **SEO Optimizado**: Meta tags, Open Graph y datos estructurados
- **Error Boundaries**: Manejo robusto de errores

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, Material-UI, Tailwind CSS
- **Íconos**: Material-UI Icons, SVG personalizados
- **Bundling**: Create React App
- **Linting**: ESLint con configuración personalizada
- **Formatting**: Prettier
- **Deployment**: Netlify

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Avatar.js
│   ├── Banner.js
│   ├── ErrorBoundary.js
│   ├── IconLink.js
│   ├── ImageText.js
│   ├── Line.js
│   ├── TwoColumns.js
│   ├── User.js
│   └── VideoText.js
├── pages/              # Páginas principales
│   ├── CV.js
│   ├── Games.js
│   ├── Home.js
│   ├── Vrar.js
│   └── Webs.js
├── utils/              # Funciones utilitarias
│   └── helpers.js
├── constants/          # Constantes de la aplicación
│   └── theme.js
├── config/             # Configuración de la aplicación
│   └── index.js
└── files/              # Assets (imágenes, SVGs)
    ├── images/
    └── svg/
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/Jezusito/MyWeb.git
cd MyWeb
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
# Edita .env.local con tus valores
```

4. Inicia el servidor de desarrollo:
```bash
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## 📜 Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run lint` - Ejecuta ESLint
- `npm run lint:fix` - Corrige automáticamente problemas de linting
- `npm run format` - Formatea el código con Prettier
- `npm run analyze` - Analiza el bundle de la aplicación

## 🎨 Personalización

### Colores y Tema

Los colores principales se definen en `src/constants/theme.js`:

```javascript
export const THEME_COLORS = {
  PRIMARY: '#ffffff',
  SECONDARY: '#a18a66',
  SECONDARY_HOVER: '#96794b',
  // ...
};
```

### Configuración

La configuración de la aplicación está centralizada en `src/config/index.js` y utiliza variables de entorno para facilitar el deployment.

## 📱 Características de Accesibilidad

- Navegación por teclado completa
- Etiquetas ARIA apropiadas
- Alto contraste de colores
- Texto alternativo para imágenes
- Estructura semántica HTML5

## 🔧 Optimizaciones de Performance

- **Lazy Loading**: Los componentes de página se cargan bajo demanda
- **React.memo**: Memorización de componentes para evitar re-renders innecesarios
- **Code Splitting**: División automática del código por rutas
- **Image Optimization**: Carga lazy de imágenes con placeholders
- **Bundle Analysis**: Herramientas para analizar el tamaño del bundle

## 🌐 SEO y Meta Tags

- Meta tags optimizados para motores de búsqueda
- Open Graph tags para redes sociales
- Datos estructurados JSON-LD
- Sitemap y robots.txt configurados

## 🚀 Deployment

El proyecto está configurado para deployment en Netlify:

1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno en Netlify
3. El deployment se ejecuta automáticamente en cada push

### Variables de Entorno Requeridas

```
REACT_APP_NAME=Tu nombre
REACT_APP_EMAIL=tu@email.com
REACT_APP_PHONE=+34123456789
REACT_APP_GITHUB_URL=https://github.com/tuusuario
REACT_APP_LINKEDIN_URL=https://linkedin.com/in/tuusuario
```

## 📄 Licencia

Este proyecto es personal y está disponible para fines educativos y de referencia.

## 📞 Contacto

- **Email**: jesusmarquezdelgado@gmail.com
- **LinkedIn**: [Jesús Márquez Delgado](https://www.linkedin.com/in/jes%C3%BAs-m%C3%A1rquez-delgado-1334531b9/)
- **GitHub**: [Jesus-md-dev](https://github.com/Jesus-md-dev)

---

## 🔄 Mejoras Implementadas

Este proyecto ha sido refactorizado siguiendo las mejores prácticas modernas:

### ✅ Arquitectura
- Conversión de class components a functional components
- Implementación de hooks de React
- Separación de responsabilidades

### ✅ Performance
- Lazy loading de componentes
- React.memo para optimización de renders
- Code splitting automático

### ✅ Accesibilidad
- Etiquetas ARIA completas
- Navegación por teclado
- Estructura semántica HTML5

### ✅ SEO
- Meta tags optimizados
- Open Graph tags
- Datos estructurados

### ✅ Mantenibilidad
- Configuración centralizada
- Variables de entorno
- Linting y formatting automático
- Error boundaries

### ✅ Calidad de Código
- TypeScript ready (arquitectura preparada)
- ESLint configurado
- Prettier para formatting consistente
- Estructura de carpetas organizada
