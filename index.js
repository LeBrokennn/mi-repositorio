const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

// Para permitir peticiones desde el frontend
app.use(cors());

// Para leer el JSON que envía el cliente
app.use(express.json());

/**********************************************
 *            RUTAS DEL SERVIDOR
 **********************************************/

// GET - Mostrar canciones
app.get("/canciones", (req, res) => {
    const repertorio = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    res.json(repertorio);
});

// POST - Agregar canción nueva
app.post("/canciones", (req, res) => {
    const repertorio = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    repertorio.push(req.body);
    fs.writeFileSync("repertorio.json", JSON.stringify(repertorio, null, 2));
    res.send("Canción agregada correctamente 🎵");
});

// PUT - Editar canción según ID
app.put("/canciones/:id", (req, res) => {
    const { id } = req.params;
    const repertorio = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    repertorio[id] = req.body;
    fs.writeFileSync("repertorio.json", JSON.stringify(repertorio, null, 2));
    res.send("Canción actualizada 🎶");
});

// DELETE - Eliminar canción según ID
app.delete("/canciones/:id", (req, res) => {
    const { id } = req.params;
    const repertorio = JSON.parse(fs.readFileSync("repertorio.json", "utf8"));
    repertorio.splice(id, 1);
    fs.writeFileSync("repertorio.json", JSON.stringify(repertorio, null, 2));
    res.send("Canción eliminada ❌");
});

// Página de prueba simple
app.get("/", (req, res) => {
    res.send("Servidor Mi Repertorio funcionando 🎤🙂");
});

/**********************************************
 *            LEVANTAR SERVIDOR
 **********************************************/
app.listen(3000, () => console.log("Servidor activo en http://localhost:3000"));
