# FreeEbooks by CodeGame

Lading page para envio de libros gratis proporcionados por **CodeGame**.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución del Proyecto](#ejecución-del-proyecto)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura de Archivos](#estructura-de-archivos)
- [Despliegue](#despliegue)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- Formulario de registro de usuario con validación de correo eletronico.
- Envio de correos eletronicos utilizando API EmailSend.
- Almacenamiento de datos del usuario en una base de datos MySQL.
- Enlace de descarga segura de los libros.
- Despliegue en Replit y Railway para API y la base de datos.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/) - Framework React para aplicaciones web.
- [React](https://reactjs.org/) - Biblioteca de JavaScript para construir interfaces de usuario.
- [MySQL](https://www.mysql.com/) - Sistema de gestión de bases de datos.
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript.
- [EmailSend](https://github.com/CodeGameMexico/EmailSending-CD) - API de envio de correos.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS para el diseño.
- [Replit](https://replit.com/) - Entorno de desarrollo para desplegar la API.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas:

- [Node.js](https://nodejs.org/) (versión 14.x o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)
- Cuenta en [Railway](https://railway.app/) para la base de datos MySQL.
- Cuenta en [Replit](https://replit.com/) para alojar la API.

## Instalación

Sigue estos pasos para instalar las dependencias y configurar el proyecto:

1. Clona este repositorio:

    ```bash
    git clone https://github.com/CodeGameMexico/FreeEbooks
    ```

2. Accede al directorio del *Backend*:

    ```bash
    cd backend
    ```

3. Instala las dependencias:

    ```bash
    npm install
    # o con Yarn
    yarn install
    ```
4. Accede al directorio del *Frontend*:

    ```bash
    cd frontend
    ```

5. Instala las dependencias:

    ```bash
    npm install
    # o con Yarn
    yarn install
    ```

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo, ejecutar este mismo comando para ambos directorios tanto el del *backend* para el puerto 3000 como para el *frontend* para el puerto 3001:

```bash
npm run dev
# o con Yarn
yarn dev
```