// server.js
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();

// Si ton frontend est dans le même projet (build dans backend), tu peux autoriser tout pour le développement
app.use(cors());

// Parse JSON
app.use(express.json());

// Secret pour JWT
const SECRET = "password";

// Endpoint pour mot de passe
app.post("/api/password", (req, res) => {
    const { password } = req.body;

    if (password === "password") {
        const token = jwt.sign({ user: "admin" }, SECRET, { expiresIn: "1h" });
        res.json({ message: "Vous êtes connecté", token });
    } else {
        res.status(401).json({ message: "Mot de passe incorrect" });
    }
});

// Servir le build React
// Ici on suppose que tu as copié ton build React dans backend/build
app.use(express.static(path.join(__dirname, 'build')));

// Toutes les autres routes retournent index.html (React router)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Port pour Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;