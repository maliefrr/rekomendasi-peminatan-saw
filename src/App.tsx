import NilaiMatkul from './components/NilaiMatkul';
import './css/style.css'

function App() {
  const daftarMatkul = [
    {
      semester: 1,
      matkul: ['Algoritma dan Pemrograman', 'Kalkulus 1', 'Matematika Diskrit', 'Teknologi Informasi'], // Changed property name to 'matkul'
    },
    {
      semester: 2,
      matkul: ['Pemrograman Dasar', 'Kalkulus 2', 'Sistem Basis Data', 'Sistem Digital', 'Sistem Operasi'], // Changed property name to 'matkul'
    },
    {
      semester: 3,
      matkul: ['Pemrograman Web', 'Sistem Informasi', 'Sistem Basis Data Lanjut', 'Sistem Berkas', 'Organisasi dan Arsitektur Komputer', 'Probabilitas dan Statistika', 'Komunikasi Data', 'Interaksi Manusia dan Komputer'], // Changed property name to 'matkul'
    },
    {
      semester: 4,
      matkul: ['Metode Numerik', 'Struktur Data', 'Jaringan Komputer', 'Analisis dan Perancangan Sistem', 'Rekayasa Perangkat Lunak', 'Kecerdasan Buatan', 'Teori Graf dan Automata'], // Changed property name to 'matkul'
    },
  ];

  return (
    <>
      <div className="container mt-5">
        <div className="judul mb-3">
          <h1>Sistem Pendukung Keputusan</h1>
          <h2>Peminatan Jurusan Teknik Informatika UHO</h2>
        </div>
        <NilaiMatkul dataMatkul={daftarMatkul} />
      </div>
    </>
  );
}

export default App;
