# 🍽️ Restaurant API Backend

Una API REST completa para gestionar un sistema de restaurante, construida con Node.js, Express y MongoDB.

## 📋 Características

- ✅ **Gestión de Usuarios**: CRUD completo con protección de usuarios admin
- ✅ **Gestión de Menú**: Crear, leer, actualizar y eliminar elementos del menú
- ✅ **Gestión de Órdenes**: Sistema completo de pedidos con estados
- ✅ **Base de Datos**: MongoDB con Mongoose ODM
- ✅ **Validaciones**: Esquemas robustos con validaciones
- ✅ **Logging**: Morgan para logging de requests
- ✅ **Variables de Entorno**: Configuración segura con dotenv

## 🚀 Tecnologías Utilizadas

- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **dotenv** - Gestión de variables de entorno
- **Morgan** - HTTP request logger
- **Nodemon** - Auto-restart en desarrollo

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/n-williamsons/bit-backend.git
   cd bit-backend
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno**
   
   Crea un archivo `.env` en la raíz del proyecto:
   ```env
   PORT=3000
   HOST=localhost
   MONGODB_URI=mongodb://localhost:27017/restaurant_db
   # o para MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/restaurant_db
   ```

4. **Inicia el servidor**
   ```bash
   # Desarrollo (con nodemon)
   npm run dev
   
   # Producción
   npm start
   ```

## 🗂️ Estructura del Proyecto

```
bit-backend/
├── src/
│   ├── config/
│   │   └── db.js              # Configuración de MongoDB
│   ├── controllers/
│   │   ├── menu.js            # Controladores del menú
│   │   └── user.js            # Controladores de usuarios
│   ├── models/
│   │   ├── menu.js            # Modelo del menú
│   │   ├── order.js           # Modelo de órdenes
│   │   └── user.js            # Modelo de usuarios
│   ├── routers/
│   │   └── menu.js            # Rutas del menú
│   └── server.js              # Servidor principal
├── package.json
├── .env                       # Variables de entorno
└── README.md
```

## 🔗 Endpoints de la API

### 📄 Base URL
```
http://localhost:3000
```

### 👥 Usuarios

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/users` | Obtener todos los usuarios |
| `GET` | `/users/:id` | Obtener un usuario específico |
| `POST` | `/users` | Crear un nuevo usuario |
| `PUT` | `/users/:id` | Actualizar un usuario |
| `DELETE` | `/users/:id` | Eliminar un usuario |

### 🍕 Menú

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/menu` | Crear un elemento del menú |

### 📋 Órdenes

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `POST` | `/orders` | Crear una nueva orden |
| `GET` | `/orders` | Obtener todas las órdenes |
| `GET` | `/orders/:id` | Obtener una orden específica |
| `PUT` | `/orders/:id` | Actualizar una orden |


## 🔒 Características de Seguridad

- **Protección Admin**: Los usuarios admin no pueden ser actualizados o eliminados
- **Validaciones**: Validaciones robustas en todos los endpoints
- **Manejo de Errores**: Respuestas de error consistentes y descriptivas

## 🛠️ Scripts Disponibles

```bash
# Iniciar en desarrollo
npm run dev

# Iniciar en producción
npm start
```

## 📁 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `PORT` | Puerto del servidor | `3000` |
| `HOST` | Host del servidor | `localhost` |
| `MONGODB_URI` | URI de conexión a MongoDB | `mongodb://localhost:27017/restaurant_db` |

## 🚨 Códigos de Estado HTTP

| Código | Descripción |
|--------|-------------|
| `200` | Éxito |
| `201` | Creado exitosamente |
| `400` | Solicitud inválida |
| `403` | Prohibido (usuario admin) |
| `404` | Recurso no encontrado |
| `500` | Error interno del servidor |


## 👨‍💻 Autor

**Nicolás Williamson Silva**  
Junior Web Developer  
📅 2025  

---

## 📬 Contacto

¿Dudas o sugerencias? ¡Contáctame!

- [LinkedIn](https://www.linkedin.com/in/nicolasws17)
- [GitHub](https://github.com/n-williamsons)
- [Email](mailto:silvanicolasandres@gmail.com)

---

