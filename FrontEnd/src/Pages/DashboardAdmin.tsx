import { Link } from "react-router-dom"


const DashboardAdmin = () => {
  return (
    <>
      <div className="container mt-5">
      <div className="main-content">
        <div className="container mt-3">
            <h1 className="title">Dashboard Admin</h1>
            <Link to={'/add/mahasiswa'} className="btn btn-warning mb-3">Tambah Mahasiswa</Link>
        <input type="text" className="form-control search-icon mb-3" placeholder="Cari Mahasiswa"/>
        <table className="table mt-4">
          <thead>
            <th>Nama</th>
            <th>NIM</th>
            <th>action</th>
          </thead>
          <tbody>
            <tr>
              <td>Mohamad Alief</td>
              <td>F1G119031</td>
              <td>
                <>
                  <div className="btn-action">
                    <button className="btn btn-primary">Semester 1</button>
                    <button className="btn btn-primary">Semester 2</button>
                    <button className="btn btn-primary">Semester 3</button>
                    <button className="btn btn-primary">Semester 4</button>
                  </div>
                </>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default DashboardAdmin
