# 🎵 Mi Repertorio 🎶

Este es un proyecto sencillo de **API REST con Node.js y Express** que gestiona un repertorio de canciones guardadas en un archivo JSON.  
Puedes **crear, leer, actualizar y eliminar canciones** usando diferentes métodos HTTP.

---

## 🧠 ¿Qué hace este proyecto?

Este backend permite:

- 📜 Listar todas las canciones  
- ➕ Agregar nuevas canciones  
- ✏️ Editar canciones por su id  
- ❌ Eliminar canciones  

Los datos se almacenan en un archivo local `repertorio.json`.  
No usa base de datos SQL ni MongoDB, todo se maneja con **file system**. :contentReference[oaicite:1]{index=1}

---

## 🚀 Tecnologías usadas

- 🟢 **Node.js**
- 🚂 **Express.js**
- 📦 **npm**
- 📁 **JSON** (archivo local para guardar los datos)

---

## 📁 Estructura del proyecto
mi-repositorio
├── index.js
├── repertorio.json
├── package.json
├── package-lock.json
├── node_modules/
└── public/



| Método | Ruta             | Descripción                             |
| ------ | ---------------- | --------------------------------------- |
| GET    | `/`              | Prueba que el servidor está funcionando |
| GET    | `/canciones`     | Lista todas las canciones               |
| POST   | `/canciones`     | Agrega una nueva canción                |
| PUT    | `/canciones/:id` | Edita una canción por ID                |
| DELETE | `/canciones/:id` | Elimina una canción por ID              |
