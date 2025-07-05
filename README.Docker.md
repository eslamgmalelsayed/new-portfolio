# Docker Guide for Portfolio App

This guide explains how to run your Next.js portfolio application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## Quick Start

### 1. Build and Run (Production)

```bash
# Build and run the production container
docker-compose up --build

# Or run in detached mode (background)
docker-compose up -d --build
```

Your app will be available at `http://localhost:3000`

### 2. Development Mode

```bash
# Run in development mode with hot reloading
docker-compose --profile dev up --build portfolio-dev
```

Development server will be available at `http://localhost:3001`

## Docker Commands Explained

### Basic Commands

```bash
# Build the Docker image
docker build -t portfolio-app .

# Run the container
docker run -p 3000:3000 portfolio-app

# Run in background
docker run -d -p 3000:3000 --name portfolio portfolio-app

# Stop the container
docker stop portfolio

# Remove the container
docker rm portfolio

# View logs
docker logs portfolio
```

### Docker Compose Commands

```bash
# Start services
docker-compose up

# Start in background
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs

# Rebuild and start
docker-compose up --build

# Start specific service
docker-compose up portfolio

# Start development service
docker-compose --profile dev up portfolio-dev
```

## File Structure

```
portfolio/
├── Dockerfile              # Production build
├── Dockerfile.dev          # Development build
├── docker-compose.yml      # Service orchestration
├── .dockerignore           # Files to exclude from build
├── next.config.docker.mjs  # Docker-specific Next.js config
└── README.Docker.md        # This file
```

## How It Works

### Production Dockerfile (Multi-stage Build)

1. **Base Stage**: Sets up Node.js environment
2. **Dependencies Stage**: Installs npm packages
3. **Builder Stage**: Builds the Next.js application
4. **Runner Stage**: Creates lightweight production image

### Development Dockerfile

- Single stage for faster builds
- Includes hot reloading
- Mounts source code as volume

## Environment Variables

You can customize the application using environment variables:

```bash
# In docker-compose.yml or .env file
NODE_ENV=production
PORT=3000
NEXT_TELEMETRY_DISABLED=1
```

## Optimization Features

### Production Build

- Multi-stage build for smaller image size
- Non-root user for security
- Standalone output for better performance
- Optimized layer caching

### Development Build

- Fast rebuilds
- Hot reloading
- Volume mounting for live code changes

## Troubleshooting

### Common Issues

1. **Port already in use**

   ```bash
   # Change port in docker-compose.yml
   ports:
     - "3001:3000"  # Use different host port
   ```

2. **Build fails**

   ```bash
   # Clear Docker cache
   docker system prune -a

   # Rebuild without cache
   docker-compose build --no-cache
   ```

3. **Permission issues**

   ```bash
   # Check if Docker daemon is running
   docker info

   # On Linux, add user to docker group
   sudo usermod -aG docker $USER
   ```

### Useful Commands

```bash
# Enter running container
docker exec -it portfolio-app sh

# View container resource usage
docker stats

# Inspect container
docker inspect portfolio-app

# View image layers
docker history portfolio-app
```

## Deployment

### Production Deployment

1. **Build for production**

   ```bash
   docker build -t portfolio-app:latest .
   ```

2. **Tag for registry**

   ```bash
   docker tag portfolio-app:latest your-registry/portfolio-app:latest
   ```

3. **Push to registry**
   ```bash
   docker push your-registry/portfolio-app:latest
   ```

### Cloud Deployment

The Docker setup works with:

- AWS ECS/Fargate
- Google Cloud Run
- Azure Container Instances
- DigitalOcean App Platform
- Railway, Render, etc.

## Best Practices

1. **Use .dockerignore** to exclude unnecessary files
2. **Multi-stage builds** for smaller production images
3. **Non-root user** for security
4. **Health checks** for reliability
5. **Environment variables** for configuration
6. **Volume mounting** for development

## Next Steps

- Add health checks to Dockerfile
- Set up CI/CD pipeline
- Configure monitoring and logging
- Add SSL/TLS termination
- Set up container orchestration (Kubernetes)
