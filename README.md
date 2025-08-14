<h1 align=center>Modern E-commerce Platform | AstroJs + Shopify + Tailwind CSS + TypeScript</h1>

<p align=center>A modern, production-ready e-commerce platform built with Astro.js, Tailwind CSS and TypeScript. Features full Shopify integration with Storefront API through GraphQL for a complete shopping experience.</p>

<h2 align="center"> <a target="_blank" href="#" rel="nofollow">🛍️ Live Store</a> | <a  target="_blank" href="#">⚡ Performance Optimized</a>
</h2>

<p align=center>

 <a href="https://github.com/withastro/astro/releases/tag/astro@5.8.1" alt="Contributors">
    <img src="https://img.shields.io/static/v1?label=ASTRO&message=5.8&color=BC52EE&logo=astro" />
</a>
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/badge/build-passing-brightgreen.svg" alt="build status">
</p>

## 📌 Key Features

- 🌐 Dynamic Products from Shopify Storefront API
- 💸 Checkout and Payments with Shopify
- 🌞 Automatic Light/Dark Mode
- 🚀 Fetching and Caching Paradigms
- 🔗 Server Actions for Mutations
- 🔐 User Authentication
- 🧩 Similar Products Suggestions
- 🔍 Search, Sort, Different Views Functionality
- 🏷️ Tags & Categories & Vendors & Price Range & Product Variants Functionality
- 🖼️ Single Product Image Zoom, Hover Effect, Slider
- 🛒 Cart & Easy editing options for cart items
- 📝 Product Description on Multiple Tabs
- 🔗 Netlify Setting Pre-configured
- 📞 Support Contact Form
- 📱 Fully Responsive
- 🔄 Dynamic Home Banner Slider
- 📝 Write and Update Content in Markdown / MDX
- ⌛ Infinite Product Load on Scrolling

### 📄 10+ Pre-designed Pages

- 🏠 Homepage
- 👤 About
- 📞 Contact
- 🛍️ Products
- 📦 Product Single
- 💡 Terms of services
- 📄 Privacy Policy
- 🔐 Login
- 🔑 Register
- 🚫 Custom 404

## 🚀 Cómo Funciona Astro

### ¿Qué es Astro?
Astro es un framework moderno que genera sitios web **estáticos** súper rápidos. A diferencia de React o Vue que ejecutan JavaScript en el navegador, Astro:

1. **Genera HTML estático** en tiempo de construcción
2. **Envía menos JavaScript** al navegador (solo el necesario)
3. **Carga más rápido** porque no necesita "hidratación" completa
4. **SEO perfecto** porque el contenido está en HTML desde el inicio

### Estructura del Proyecto
```
src/
├── pages/          # Rutas automáticas (index.astro = /, about.astro = /about)
├── layouts/        # Plantillas reutilizables
├── components/     # Componentes Astro y React
├── content/        # Contenido en Markdown/MDX
├── config/         # Configuración del sitio
└── styles/         # Estilos CSS/Tailwind
```

### Cómo Funciona el Routing
- `src/pages/index.astro` → `/` (página principal)
- `src/pages/about.astro` → `/about`
- `src/pages/products/[id].astro` → `/products/123` (rutas dinámicas)

### 📦 Dependencias

- astro 5.8+
- node v20.10+
- npm v10.2+
- tailwind v4.1+
- shopify (opcional)

<!-- get Shopify storefront API access token-->

## 🛒 Retrieve Shopify Token & Add Demo Products

- To get the tokens needed, create a Shopify partner account.
  ![Screenshot_1](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/1.png)

- Now go to 'stores' and select 'Add store.' Create a development store using the option 'Create development store'.
  ![Screenshot_2](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/2.png)

- Click on import products.
  ![Screenshot_3](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/3.png)

- Locate the 'products' CSV file in the public folder of the repository and upload it for demo products.
  ![Screenshot_4](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/4.png)

- On the admin dashboard, click on ‘Settings’ at the bottom of the left sidebar.
  ![Screenshot_5](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/5.png)

- On the Settings page, click on ‘Apps and sales channels’ on the left sidebar.
  ![Screenshot_6](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/6.png)

- In the Apps and sales channels page that opens, click on ‘Develop apps’ on the top right.
  ![Screenshot_7](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/7.png)

- Now, on the App development page that opens, click on ‘Create an app’.
  ![Screenshot_8](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/8.png)

- A ‘Create an app’ popup opens. Fill in any name in the ‘App Name’ text box. In the App Developer text box, your name and email id is automatically fetched. Else type in the same email id you used while signing up for the Shopify store.
  ![Screenshot_9](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/9.png)

- Next, click on ‘Configure’ in the Storefront API integration section.
  ![Screenshot_10](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/10.png)

- In the Storefront API access scopes, select and check all the boxes and click on ‘Save’ and then ‘Install app’.
  ![Screenshot_11](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/11.png)

- Navigate to the 'API credentials' tab and locate three essential pieces of information. Subsequently, update your `.env` file by replacing the placeholder quotes("") in the `.env.example` file with your Shopify credentials.
  ![Screenshot_12](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/12.png)

- When adding your product, use the same alt title for images with the same color. This helps the first image appear as the color variant in the selector.
  ![Screenshot_13](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/13.png)
  ![Screenshot_14](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/14.png)

- We have the option to create additional collections for products.
  ![Screenshot_15](https://raw.githubusercontent.com/tfmurad/images-shopify-commerce/refs/heads/main/15.png)

## 🚀 Setting Up the Hero Slider

1. Go to the file `/src/config/config.json` in your Shopify project and find the 'hero_slider' section. You’ll see something like this:

   ```json
   "shopify": {
     "currencySymbol": "৳",
     "currencyCode": "BDT",
     "collections": {
       "hero_slider": "hidden-homepage-carousel",
       "featured_products": "featured-products"
     }
   }
   ```

2. Change the 'hero_slider' collection name to something of your choice.

3. Then, go to your Shopify Partner Dashboard, navigate to Products > Collections, and create a collection with the same name you set in the config file (e.g., 'hidden-homepage-carousel').

4. Add the products you want to display in the hero slider to this collection.

## 🚀 Configuración para GitHub Pages

### 1. Preparar el Repositorio
```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Construir para producción
npm run build
```

### 2. Configurar GitHub Pages
1. Sube el código a GitHub
2. Ve a Settings > Pages en tu repositorio
3. Selecciona "GitHub Actions" como source
4. El workflow automático se ejecutará y desplegará tu sitio

### 3. Personalizar tu Tienda
- Edita `src/config/config.json` para cambiar nombre, logo, etc.
- Modifica `src/pages/` para cambiar páginas
- Actualiza `src/content/` para el contenido
- Cambia estilos en `src/styles/`

### 🛍️ Integración con Shopify (Opcional)
Si quieres productos reales, configura Shopify siguiendo las instrucciones originales del template.

<!-- reporting issue -->

## 🐞 Reporting Issues

We use GitHub Issues as the official bug tracker for this Template. Please Search [existing issues](https://github.com/themefisher/shopplate/issues). It’s possible someone has already reported the same problem.
For any issues or questions about this e-commerce platform, please contact our support team.

## 📝 License

Copyright (c) 2024 - Present. Released under the MIT license.

**Image license:** Product images are for demonstration purposes only.

---

## ✅ **ESTADO ACTUAL - LISTO PARA MOSTRAR A CLIENTES**

### 🎯 **Lo que YA funciona:**
- ✅ **Carrito funcional** (modo demo) con notificaciones
- ✅ **Productos con precios en dólares**
- ✅ **Interfaz completamente en español**
- ✅ **Navegación completa**
- ✅ **Responsive design**
- ✅ **Modo oscuro/claro**
- ✅ **Páginas: Inicio, Productos, Nosotros, Contacto**
- ✅ **Sin rastros de template**
- ✅ **Notificaciones visuales** al agregar productos

### 🚀 **Para GitHub Pages:**
1. Sube a GitHub
2. Activa GitHub Pages (Settings > Pages > GitHub Actions)
3. ¡Listo para mostrar!

### 💼 **Para Presentar a Clientes:**
- **URL profesional** en GitHub Pages
- **Carrito funcional** para demostración
- **Diseño moderno** y responsive
- **Productos de ejemplo** con precios reales

### 🛒 **¿Qué le faltaría para ser un e-commerce REAL?**
1. **Shopify configurado** (productos reales, inventario)
2. **Pasarela de pagos** (Stripe, PayPal)
3. **Sistema de envíos**
4. **Gestión de usuarios** (registro, login)
5. **Panel de administración**
6. **Emails automáticos** (confirmaciones, envíos)
7. **Analytics** (Google Analytics, etc.)

**Pero para MOSTRAR a clientes, ya está perfecto! 🎉**
