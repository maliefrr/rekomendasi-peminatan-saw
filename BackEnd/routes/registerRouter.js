const express = require("express")
const { registerMahasiswa } = require("../controller/registerController")

const router = express.Router()

router.get("/", (req,res) => {
    res.send("Menu Register")
})

router.post("/mahasiswa", registerMahasiswa)

module.exports = router