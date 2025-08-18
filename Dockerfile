# Stage 1: Build the application using the official Node.js image
FROM node:23 AS build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Build the React app using Vite
RUN npm run build

# Stage 2: Serve the built files using a lightweight HTTP server
FROM node:23

# Install a lightweight HTTP server to serve the built files
RUN npm install -g serve

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the built application files from the build stage
COPY --from=build /usr/src/app/dist/ ./

# Expose port 3000 (or any port you'd like to use)
EXPOSE 8080

# Use `serve` to serve the application
CMD ["serve", "-s", ".", "-l", "8080"]
