const mongoose = require("mongoose");
const { Schema } = mongoose;

const images = new Schema({
    url: { type: String, required: true },
    nombre: { type: String, required: true },
});

const developers = new Schema({
    nombre: { type: String, required: true },
    carnet: { type: String, required: true },
    curso: { type: String, required: true },
    puesto: { type: String, required: true },
    imagen: { type: String, required: true },
});

const administrators = new Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    puesto: { type: String, required: true },
    imagen: { type: String, required: true },
});

module.exports = {
    modelImage: mongoose.model("images", images, "images"),
    modelDeveloper: mongoose.model("developers", developers, "developers"),
    modelAdministrators: mongoose.model(
        "administrators",
        administrators,
        "administrators"
    ),
};