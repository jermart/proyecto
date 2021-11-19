import express from "express";
const router = express.Router();

import Mensaje from "../models/mensaje";

router.post("/new-mensaje", async (req, res) => {
  const mensaj = req.body;
  console.log(mensaj);
  try {
    const Newmens = await Mensaje.create(mensaj);
    console.log(Newmens);
    res.json({ Newmens });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
