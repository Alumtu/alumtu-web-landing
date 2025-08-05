<div align="center">
  <img src="src/assets/logo.png" alt="Alumtu Logo" width="120" height="120">
  
  # Alumtu - Landing Page
  
  ### La plataforma que conectará estudiantes y profesores para clases privadas personalizadas
  
  [![Astro](https://img.shields.io/badge/Astro-5.12.8-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-222222?logo=github&logoColor=white)](https://pages.github.com/)
</div>

---

## 📖 Acerca del Proyecto

**Alumtu** es una plataforma innovadora en desarrollo que revolucionará la forma en que estudiantes y profesores se conectan para el aprendizaje personalizado. Esta landing page presenta nuestra visión y permite a los usuarios unirse a nuestra lista de espera para recibir acceso anticipado y descuentos exclusivos.

### 🎯 Características Principales

- **🔍 Matching Inteligente**: Algoritmos que conectan estudiantes con profesores ideales
- **💬 Comunicación Fluida**: Herramientas integradas de comunicación
- **🛡️ Seguridad Garantizada**: Verificación de identidad y ambiente confiable
- **📱 Diseño Responsivo**: Experiencia optimizada en todos los dispositivos
- **⚡ Performance Optimizada**: Carga rápida y navegación fluida

## 🚀 Estructura del Proyecto

``` plaintext
alumtu-web-landing/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/                 # Imágenes y SVGs
│   │   ├── logo.png           # Logo principal de Alumtu
│   │   ├── books.svg          # Icono de libros/estudiantes
│   │   ├── teacher.svg        # Icono de profesores
│   │   ├── diana.svg          # Icono de personalización
│   │   ├── innovation.svg     # Icono de innovación
│   │   ├── search.svg         # Icono de búsqueda
│   │   ├── chat.svg           # Icono de comunicación
│   │   ├── shield.svg         # Icono de seguridad
│   │   ├── news.svg           # Icono de noticias
│   │   ├── discounts.svg      # Icono de descuentos
│   │   ├── linkedin.svg       # Icono de LinkedIn
│   │   ├── mail.svg           # Icono de email
│   │   └── x.svg              # Icono de X (Twitter)
│   ├── components/
│   │   ├── Header.astro       # Navegación principal
│   │   ├── Hero.astro         # Sección principal con animaciones
│   │   ├── Newsletter.astro   # Formulario de lista de espera
│   │   └── Footer.astro       # Pie de página
│   ├── layouts/
│   │   └── Layout.astro       # Layout base con meta tags
│   └── pages/
│       ├── index.astro        # Página principal
│       ├── about.astro        # Acerca de nosotros
│       └── team.astro         # Nuestro equipo
├── astro.config.mjs           # Configuración de Astro
├── package.json               # Dependencias del proyecto
└── tsconfig.json             # Configuración de TypeScript
```

## 🛠️ Tecnologías Utilizadas

- **[Astro 5.12.8](https://astro.build/)** - Framework web moderno
- **TypeScript** - Tipado estático para JavaScript
- **CSS3** - Estilos con animaciones y efectos visuales
- **HTML5** - Estructura semántica

## 🏁 Inicio Rápido

### Prerrequisitos

- Node.js 18.x o superior
- npm o yarn

### Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/alumtu-web-landing.git
   cd alumtu-web-landing
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**

   ```bash
   npm run dev
   ```

4. **Abre tu navegador**

   ```plaintext
   http://localhost:4321
   ```

## 📜 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build` | Construye el sitio para producción en `./dist/` |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run astro ...` | Ejecuta comandos CLI de Astro |
| `npm run astro -- --help` | Obtener ayuda sobre los comandos de Astro |

## 🚀 Despliegue en GitHub Pages

### Configuración de Dominio Personalizado

1. **Configura tu dominio personalizado**

   En Settings > Pages > Custom domain, ingresa tu dominio:

   ```plaintext
   www.alumtu.com
   ```

2. **Configura los registros DNS**

   En tu proveedor de DNS, añade estos registros:

   **Para subdominios (www.alumtu.com):**

   ```plaintext
   CNAME  www  tu-usuario.github.io
   ```

   **Para dominio raíz (alumtu.com):**

   ```plaintext
   A  @  185.199.108.153
   A  @  185.199.109.153
   A  @  185.199.110.153
   A  @  185.199.111.153
   ```

3. **Actualiza astro.config.mjs para dominio personalizado**

   ```javascript
   import { defineConfig } from 'astro/config';

   export default defineConfig({
     site: 'https://www.alumtu.com',
     // Elimina la opción 'base' para dominio personalizado
     image: {
       remotePatterns: [
         // ... patrones existentes
       ],
     },
   });
   ```

4. **Crea archivo CNAME**

   Crea `public/CNAME` con tu dominio:

   ```plaintext
   www.alumtu.com
   ```

### Proceso de Despliegue

1. **Realiza push a la rama main**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

2. **Verifica el despliegue**
   - Ve a la pestaña "Actions" en GitHub
   - Verifica que el workflow se ejecute correctamente
   - El sitio estará disponible en tu dominio en unos minutos

## 👥 Equipo

- **Donald Zhangallimbay** - CO & Co-fundador
- **Martín Ordóñez Oviedo** - CO & Co-fundador  
- **Emilio Aguilar** - CO & Co-fundador
- **Alex Córdova** - CTO & Co-fundador

## 📞 Contacto

- **Email**: info@alumtu.com
- **Sitio Web**: [www.alumtu.com](https://www.alumtu.com)

## 📄 Licencia

© 2025 Alumtu. Todos los derechos reservados.

---

<div align="center">
  <p>Construido con ❤️ usando <a href="https://astro.build/">Astro</a></p>
  <p>¿Interesado en unirte a nuestro equipo? <a href="mailto:info@alumtu.com">Contáctanos</a></p>
</div>