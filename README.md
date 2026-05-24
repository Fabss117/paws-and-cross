# 🐾 Paws & Cross — Sistema de Gestión Veterinaria

Sistema web para la gestión de una clínica veterinaria canina. Permite administrar pacientes, expedientes médicos y citas. Desarrollado con Node.js y contenerizado con Docker.

---

## 📋 Descripción de Usuario

### ¿Qué es Paws & Cross?
Paws & Cross es una aplicación web para veterinarias que permite al personal médico gestionar de forma sencilla toda la información de sus pacientes caninos.

### ¿Qué puedes hacer con la app?

| Sección | ¿Para qué sirve? |
|---|---|
| 🏠 **Dashboard** | Ver un resumen general: citas del día, pacientes activos, ingresos y acciones rápidas |
| 🐕 **Patients** | Consultar el directorio completo de pacientes, buscar mascotas y agregar nuevas |
| 📋 **Medical Records** | Ver el historial médico de cada paciente, diagnósticos, vacunas y tratamientos |
| 📅 **Schedule** | Consultar y administrar la agenda de citas de la clínica |

### ¿Cómo usar la aplicación?
1. Abre tu navegador y entra a `http://localhost:3000`
2. Serás redirigido automáticamente al Dashboard
3. Usa el menú lateral izquierdo para navegar entre las secciones
4. Cada sección muestra la información correspondiente de la clínica

---

## 🔧 Descripción Técnica

### Tecnologías utilizadas

- **Node.js** v18 — Entorno de ejecución del servidor
- **Express.js** v4 — Framework para el servidor web
- **HTML5 / CSS3 / TailwindCSS** — Interfaz de usuario
- **Docker** — Contenerización de la aplicación

### Estructura del proyecto

```
paws-and-cross/
├── Dockerfile              # Configuración del contenedor Docker
├── .dockerignore           # Archivos excluidos del contenedor
├── package.json            # Dependencias y configuración de Node.js
├── server.js               # Servidor Express (punto de entrada)
└── public/
    ├── pages/
    │   ├── dashboard.html        # Pantalla principal
    │   ├── patients.html         # Directorio de pacientes
    │   ├── medical-records.html  # Expedientes médicos
    │   └── schedule.html         # Agenda y citas
    └── images/
        └── *.png                 # Capturas de pantalla
```

### Rutas del servidor

| Ruta | Descripción |
|---|---|
| `GET /` | Redirige al dashboard |
| `GET /dashboard` | Pantalla principal |
| `GET /patients` | Directorio de pacientes |
| `GET /medical-records` | Expedientes médicos |
| `GET /schedule` | Agenda y citas |

---

## 🐳 Instalación y uso con Docker

### Requisitos previos
- Tener [Docker](https://www.docker.com/) instalado

### Pasos

**1. Clonar el repositorio**
```bash
git clone https://github.com/TU_USUARIO/paws-and-cross.git
cd paws-and-cross
```

**2. Construir la imagen Docker**
```bash
docker build -t paws-and-cross .
```

**3. Correr el contenedor**
```bash
docker run -p 3000:3000 paws-and-cross
```

**4. Abrir en el navegador**
```
http://localhost:3000
```

**5. Para detener el contenedor**
```bash
docker stop $(docker ps -q --filter ancestor=paws-and-cross)
```

---

## 💻 Instalación sin Docker (modo desarrollo)

### Requisitos previos
- Node.js v18 o superior
- npm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/paws-and-cross.git
cd paws-and-cross

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor
npm start
```

Abre `http://localhost:3000` en tu navegador.

---

## 👨‍💻 Autor

Desarrollado como proyecto para la materia de **Programación Web 2**.
