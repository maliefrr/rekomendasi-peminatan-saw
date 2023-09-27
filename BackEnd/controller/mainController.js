const dataMahasiswa = require("../models/dataMahasiswa")



const getDataMahasiswa = async (req,res) => {
    try {
        const data = await dataMahasiswa.findAll()
        res.status(200).json({
            statusCode : 200,
            data
        })
    } catch (error) {
        res.status(500).json({data : error})        
    }
}

module.exports = { getDataMahasiswa}