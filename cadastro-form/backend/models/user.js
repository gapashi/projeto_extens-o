// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    sobrenome: { type: String, required: true },
    cpf: { type: String, required: true },
    rg: { type: String, required: true },
    nomeMae: { type: String, required: true },
    nomePai: { type: String },
    cep: { type: String, required: true },
    rua: { type: String, required: true },
    numero: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
