// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/cadastrar', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(400).send({ error: 'Falha ao cadastrar usuário', details: error });
    }
});

router.get('/cadastrar', async (req, res) => {
    try {
        res.status(200).send({ message: 'Rota GET' });
    } catch (error) {
        res.status(400).send({ error: 'Falha ao cadastrar usuário', details: error });
    }
});

module.exports = router;
