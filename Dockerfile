# ¿Qué imagen base usamos? Node.js versión 18 ligera (alpine = más pequeña)
FROM node:18-alpine

# Creamos una carpeta dentro del contenedor donde va a vivir nuestro proyecto
WORKDIR /app

# Copiamos primero el package.json para instalar dependencias
COPY package.json .

# Instalamos las dependencias (Express)
RUN npm install

# Copiamos el resto del proyecto al contenedor
COPY . .

# Le decimos a Docker que la app usa el puerto 3000
EXPOSE 3000

# Comando que se ejecuta cuando el contenedor arranca
CMD ["node", "server.js"]
