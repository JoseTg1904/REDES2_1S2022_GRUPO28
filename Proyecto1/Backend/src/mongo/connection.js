const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "redes2",
};

mongoose
    .connect(process.env.MONGO_URL, MONGO_CONFIG)
    .then((db) => console.log("------ ¡Conexión Exitosa a MongoDB! -----"))
    .catch((err) => console.error("Error Conexión MongoDB = ", err));

module.exports = mongoose;