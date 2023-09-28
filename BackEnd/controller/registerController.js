const {DataMahasiswa} = require("../models")



const registerMahasiswa = async (req,res) => {
    try {
        const {nama_mahasiswa,nim,peminatan,status_peminatan,ipk_sem_1,ipk_sem_2,ipk_sem_3,ipk_sem_4} = req.body
        const data = await DataMahasiswa.create({
            nama_mahasiswa,nim,peminatan,status_peminatan,ipk_sem_1,ipk_sem_2,ipk_sem_3,ipk_sem_4
        })
        res.status(200).json({
            status : 200,
            data,
            message : "Data berhasil dimasukkan kedalam database"
        }) 
    } catch (error) {
        res.status(500).json(
            error
        )
    }
}



module.exports = {registerMahasiswa}