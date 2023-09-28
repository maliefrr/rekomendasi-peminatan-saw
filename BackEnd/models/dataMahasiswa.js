'use strict';
const {
  Model
} = require('sequelize');
// const Penilaian = require('./Penilaian'); 
module.exports = (sequelize, DataTypes) => {
  class DataMahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  DataMahasiswa.init({
    nama_mahasiswa: DataTypes.STRING,
    nim: DataTypes.STRING,
    peminatan: DataTypes.STRING,
    status_peminatan: DataTypes.STRING,
    ipk_sem_1: DataTypes.FLOAT,
    ipk_sem_2: DataTypes.FLOAT,
    ipk_sem_3: DataTypes.FLOAT,
    ipk_sem_4: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'DataMahasiswa',
  });
  return DataMahasiswa;
};