# 🍽️ Restaurant API Backend

API REST para gestión de restaurante construida con Node.js y MongoDB.

## 📦 Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/n-williamsons/bit-backend.git
cd bit-backend
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
Crear archivo `.env`:
```
PORT=3000
HOST=localhost
MONGODB_URI=mongodb://localhost:27017/restaurant_db
```

4. Iniciar servidor
```bash
npm run dev
```

## 🔗 Endpoints

### 👥 Usuarios
- `GET /user` - Obtener usuarios
- `GET /user/:id` - Obtener usuario por ID
- `POST /user` - Crear usuario
- `PUT /user/:id` - Actualizar usuario
- `DELETE /user/:id` - Eliminar usuario
- `POST /user/login` - Iniciar sesión
- `POST /user/logout` - Cerrar sesión

### 🍕 Menú
- `GET /menu` - Obtener menú
- `POST /menu` - Crear item del menú
- `PUT /menu/:id` - Actualizar item
- `DELETE /menu/:id` - Eliminar item

### 📋 Órdenes
- `GET /order` - Obtener órdenes
- `POST /order` - Crear orden
- `PUT /order/:id` - Actualizar orden
- `DELETE /order/:id` - Eliminar orden

## 🚀 Tecnologías

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JWT

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