const express = require("express");
const router = express.Router();
const {
    modelImage,
    modelDeveloper,
    modelAdministrators,
} = require("../mongo/models");

/**
 *  Retorno de imagenes
 */
router.get("/imagenes", async(req, res) => {
    try {
        await modelImage.find().exec((err, images) => {
            if (err) return res.status(500).json([]);
            return res.status(200).json(images);
        });
    } catch (error) {
        res.status(500).json([]);
    }
});

/**
 *  Retorna a todos los adminitradores
 */
router.get("/administradores", async(req, res) => {
    try {
        await modelAdministrators.find().exec((err, admins) => {
            if (err) return res.status(500).json([]);
            return res.status(200).json(admins);
        });
    } catch (error) {
        res.status(500).json([]);
    }
});

/**
 *  Retorna a todos los desarrolladores de ucron
 */
router.get("/desarrolladores", async(req, res) => {
    try {
        await modelDeveloper.find().exec((err, developers) => {
            if (err) return res.status(500).json([]);
            return res.status(200).json(developers);
        });
    } catch (error) {
        res.status(500).json([]);
    }
});

module.exports = router;