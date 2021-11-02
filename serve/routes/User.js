const express = require("express");
const path = require("path");
const router = express.Router();

import User from "../models/user";

router.post("/new-user", async (req, res) => {
  const body = req.body;
  try {
    const Newuser = await User.create(body);
    console.log(Newuser);
    res.json(Newuser);
  } catch (error) {
    console.log(error);
    if (error.code == 11000) {
      console.log(error);
      res.json({ mensaje: "usuario ya esta registrado" });
    }
  }
});

router.post("/auth-user", async (req, res) => {
  const { username, password, email, role } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(404).json({ mensaje: "error al autenticar el usuario" });
    } else if (!user) {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    } else {
      user.isCorrectPassword(password, (err, result) => {
        if (err) {
          res.status(404).json({ mensaje: "error al autenticar" });
        } else if (result) {
          res.status(200).json({ username, password, email, role });
        } else {
          res.status(404).json({ mensaje: "usuario o contraseña incorrecta" });
        }
      });
    }
  });
});

module.exports = router;
