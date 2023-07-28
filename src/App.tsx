import Semester from "./components/Semester"


function App() {




  return (
    <>
    <div className="sem1">
      <Semester semester={1} matakuliah={['Algoritma dan Pemrograman', 'Kalkulus 1', 'Matematika Diskrit', 'Teknologi Informasi']}/>
    </div>
    <div className="sem2">
      <Semester semester={2} matakuliah={['Pemrograman Dasar', 'Kalkulus 2', 'Sistem Basis Data', 'Sistem Digital', 'Sistem Operasi']}/>
    </div>
    <div className="sem3">
      <Semester semester={3} matakuliah={['Pemrograman Web', 'Sistem Informasi', 'Sistem Basis Data Lanjut', 'Sistem Berkas', 'Organisasi dan Arsitektur Komputer', 'Probabilitas dan Statistika', 'Komunikasi Data', 'Interaksi Manusia dan Komputer']}/>
    </div>
    <div className="sem4">
      <Semester semester={4} matakuliah={['Metode Numerik', 'Struktur Data', 'Jaringan Komputer', 'Analisis dan Perancangan Sistem', 'Rekayasa Perangkat Lunak', 'Kecerdasan Buatan', 'Teori Graf dan Automata']}/>
    </div>
    </>
  )
}

export default App
