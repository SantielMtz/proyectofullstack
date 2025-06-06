# Ejemplo para Auth Service 
FROM node:18-alpine 
# Instalar dependencias y configurar el entorno
WORKDIR /app 
# Copiar archivos de configuración
COPY package*.json ./
# Instalar dependencias
RUN npm install
# Copiar el resto de los archivos de la aplicación
COPY . .
EXPOSE 3001
# Comando para iniciar el servidor
CMD ["node", "server.js"]
# Configuración de la variable de entorno para el puerto