# BuyMobile

Esta aplicación es una prueba de concepto de tienda para la empresa BuyMobile. La aplicación se encuentra en la siguiente URL: https://buymobile.vercel.app/

## Como empezar
Primero que nada, se debe clonar el repositorio en la carpeta deseada. Para esto se debe ejecutar el siguiente comando en la terminal:

```bash
git clone
```
## Instalación

Para instalar las dependencias del proyecto se debe ejecutar el siguiente comando en la terminal:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Ejecución

Para ejecutar el proyecto se debe ejecutar el siguiente comando en la terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
 Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

## Despliegue

Para desplegar el proyecto se debe ejecutar el siguiente comando en la terminal:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

## Tecnologías utilizadas

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [Eslint](https://eslint.org/)

# Estructura del proyecto

El proyecto se encuentra estructurado de la siguiente manera:

- **src**: Contiene el código fuente de la aplicación.
- **src/app**: Contiene las páginas de la aplicación y las carpetas para las páginas dinamicas.
  - **src/app/products/[product]**: Contiene la página dinámica del detalle del producto.
- **app/components**: Contiene los componentes de la aplicación.
- **app/context**: Contiene los contextos de la aplicación.

## Pruebas unitarias

Para ejecutar las pruebas unitarias se debe ejecutar el siguiente comando en la terminal:

```bash
npm run test
# or
yarn test
# or
pnpm test
```


