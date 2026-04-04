# My Website

This project is a full-stack web application following PERN stack, with a React frontend and a Node.js/Express backend, designed to serve my personal website containing my portfolio and delicious cooking recipes. It includes a PostgreSQL database to store the recipes and is set up for deployment using Docker. The only deployment is currently a production server.

## Features and tech-stack

*   **Client**: A responsive web interface built with React and DaisyUI ontop Tailwind CSS.
*   **Server**: A Node.js/Express API to handle requests and interact with the database recipes. Further used features are: pg (PostgreSQL client), jsonwebtoken (for authentication), dotenv.
*   **Database**: PostgreSQL for data storage.
*   **Deployment**: Dockerized application with Traefik for reverse proxy and SSL termination.

## Recipe API use

Incase you are interested in the use of my recipes only, feel free to use my API endpoints therefor. The API schema is very simple following this pattern: `https://mattia.gr/api/recipes` for the recipes list and `https://mattia.gr/api/recipes/<id>` for a recipe itself.

## Setup (Local Development)

To get this project up and running on your local machine for development and testing purposes, follow these steps.

### Prerequisites

*   Node.js (v16 or higher)
*   npm
*   Docker and Docker Compose (for database and production-like environment)

### 1. Clone the repository

```bash
git clone https://github.com/Nydonid/myWebsite.git
cd myWebsite
```

### 2. Client Setup

Navigate to the client directory, install dependencies, and start the development server.

```bash
cd client
npm install
npm start
```

The client application will run on `http://localhost:3000`.

### 3. Server Setup

Navigate to the server directory, install dependencies, and start the development server.

```bash
cd server
npm install
# Create a .env file based on .env.example
# For development, you can run:
npm run dev
# Or directly:
node index.js
```

The server API will run on `http://localhost:5000`.

### 4. Database Setup (Local Docker)

For local development, you can run the PostgreSQL database using Docker Compose.

```bash
# From the project root directory
docker-compose up db
```

This will start a PostgreSQL container on `http:localhost:5432`.

## Deployment (on a host VM)

This project is configured for production deployment using Docker Compose and Traefik as reverse proxy.

### 1. Environment Variables

Ensure you have `.env.production` files in the server directory with correct production environment variables for the API and database.

### 2. Traefik Configuration

The `docker-compose-prod.yaml` uses Traefik for reverse proxying and SSL termination with Let's Encrypt.

*   **acme.json**: This file stores Let's Encrypt certificates. It needs specific permissions.
*   Create an empty `acme.json` file in the project root on the host VM.
*   Set appropriate permissions:
    ```bash
    chmod 600 /path/to/acme.json
    chown root:root /path/to/acme.json # Or the user ID Traefik runs as
    ```

Replace `/path/to/acme.json` with the actual path to your `acme.json` file on the host machine where Docker is running. Default is `home/<user>/myWebsite`.

### 3. Running in Production

In a production environment, you should use `docker-compose-prod.yaml`.

```bash
# From the project root directory
docker-compose -f docker-compose-prod.yaml up -d
```

This will start Traefik, the API server, the React application, and the PostgreSQL database detached.

**Note**: The `docker-compose.yaml` file is typically for development or testing purposes and should be deleted or ignored in production deployments.

## Recipe Image Handling

Recipe Images are stored in the `assets/recipe_images` directory. An example link for an image is:
`https://raw.githubusercontent.com/Nydonid/myWebsite/master/assets/recipe_images/red_curry_ingredients.jpg`

When preparing images, ensure their height is set to `1024px` for consistency.
