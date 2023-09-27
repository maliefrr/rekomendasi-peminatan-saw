const express = require("express")
const { getDataMahasiswa } = require("../controller/mainController")


const router = express.Router()

router.get("/",(req,res) => {
    res.send("success bro")
})

router.get("/data/mahasiswa", getDataMahasiswa)

module.exports = router