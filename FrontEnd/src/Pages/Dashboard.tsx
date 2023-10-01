

const Dashboard = () => {
  return (
    <>
    <div className="container mt-5">
      <div className="main-content">
        <div className="container mt-3">
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
                    <button className="btn btn-primary"><span className="download-icon"></span></button>
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

export default Dashboard
