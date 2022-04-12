const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const { mongoose } = require("./mongo/connection");
const datos = require("./mongo/insertData");

const app = express();

// Settings:
app.set("port", process.env.PORT_NODEJS || 5000);

// Middlewares:
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false, limit: "10mb" }));
app.use(cors({ origin: "*" }));

// Routes:
app.get("/", (req, res) => {
    res.status(200).json({ Mensaje: "API NODEJS - REDES 2 - GRUPO 28" });
});

app.use("/",require("./routes/getData.routes"));

// Start server
app.listen(app.get("port"), () => {
    console.log(`Server on Port ${app.get("port")}`);
});