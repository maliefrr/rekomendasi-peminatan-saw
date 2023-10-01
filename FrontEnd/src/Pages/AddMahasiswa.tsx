import React, { useState } from "react";

const AddMahasiswa = () => {
    const [userInput, setUserInput] = useState({
        nama: '',
        nim: '',
        peminatan: '',
        status: '',
      });
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserInput((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
    };  

    const handlePeminatanChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserInput((prev) => ({
          ...prev,
          peminatan: e.target.value,
        }));
      };
      const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUserInput((prev) => ({
          ...prev,
          status: e.target.value,
        }));
      };
      console.log(userInput)
  return (
    <>
      <div className="container mt-5">
        <div className="main-content">
            <h1 className="title mb-3">Tambah Mahasiswa</h1>
            <form action="" method="post">
                <div className="mb-3">
                    <label htmlFor="nama" className="form-label">Nama Mahasiswa</label>
                    <input type="text" className="form-control" id="nama" placeholder="Nama Mahasiswa" value={userInput.nama} onChange={onChange} name="nama"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="nim" className="form-label">Nomor Induk Mahasiswa</label>
                    <input type="text" className="form-control" id="nim" placeholder="Nomor Induk Mahasiswa" value={userInput.nim} onChange={onChange} name="nim"/>
                </div>
                <div className="peminatan">
                    <label htmlFor="peminatan" className="form-label">Peminatan</label>
                    <select
                        value={userInput.peminatan} // Use default empty string if grade is not available
                        onChange={handlePeminatanChange}
                        className='form-select mb-3'
                    >
                        <option value="">-- Peminatan Mahasiswa --</option>                  
                        <option value="KCV">KCV</option>
                        <option value="KBJ">KBJ</option>
                        <option value="RPL">RPL</option>          
                    </select>
                </div>
                <div className="status">
                    <label htmlFor="status" className="form-label">Status Peminatan</label>
                    <select
                        value={userInput.status} // Use default empty string if grade is not available
                        onChange={handleStatusChange}
                        className='form-select mb-3'
                    >
                        <option value="">-- Status Peminatan Mahasiswa --</option>                  
                        <option value="pribadi">Minat Pribadi</option>
                        <option value="dosen">Saran Dosen</option>
                        <option value="teman">Ikut Teman</option>
                        <option value="tidak">Tidak Berminat</option>          
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default AddMahasiswa
