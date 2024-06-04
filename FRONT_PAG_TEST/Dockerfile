# Utiliza la imagen de Node.js como base
FROM node:18-bullseye-slim

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el código fuente de la aplicación
COPY . .

# Construye la aplicación de Next.js
RUN npm run build

# Expone el puerto 3000 para acceder a la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]