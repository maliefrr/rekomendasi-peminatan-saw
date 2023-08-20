import React, { useState } from 'react';
import Semester from './Semester';
import { PDFDownloadLink } from '@react-pdf/renderer';
import GeneratedPdf from './GeneratedPdf';

interface dataMatkulProps {
  dataMatkul: {
    semester: number;
    matkul: string[]; // Changed property name from 'matakuliah' to 'matkul'
  }[];
}

const NilaiMatkul: React.FC<dataMatkulProps> = ({ dataMatkul }) => {
  const [nilai, setNilai] = useState<{ [key: string]: string }>({});

  const handleNilaiChange = (matkul: string, nilai: string) => {
    setNilai((nilaiSebelum) => ({ ...nilaiSebelum, [matkul]: nilai }));
  };

    const [name,setName] = useState({
      name : ""
    })

  const peminatan = {
    RPL: ['Algoritma dan Pemrograman', 'Pemrograman Dasar', 'Pemrograman Web', 'Sistem Basis Data', 'Sistem Basis Data Lanjut', 'Analisis dan Perancangan Sistem', 'Sistem Informasi'],
    KCV: ['Algoritma dan Pemrograman', 'Matematika Diskrit', 'Probabilitas dan Statistika', 'Metode Numerik', 'Struktur Data', 'Kecerdasan Buatan', 'Kalkulus 1', 'Kalkulus 2'],
    KBJ: ['Algoritma dan Pemrograman', 'Matematika Diskrit', 'Jaringan Komputer', 'Sistem Operasi', 'Sistem Berkas', 'Interaksi Manusia dan Komputer', 'Komunikasi Data', 'Organisasi dan Arsitektur Komputer'],
  };

  // Define grade-to-weight mapping
  const gradeToWeight: { [grade: string]: number } = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    E: 0,
  };

  // Calculate the weight for each course
  const weightedValues: { [course: string]: number } = {};

  dataMatkul.forEach(({ matkul }) => {
    matkul.forEach((course) => {
      const grade = nilai[course]; // 'nilai' is the object containing the grades for each course
      const weight = gradeToWeight[grade] || 0; // Use 0 as the default weight if grade is not found
      weightedValues[course] = weight;
    });
  });

  // Calculate the overall performance score for each specialty
  const scores: { [peminatan: string]: number } = {};

  Object.entries(peminatan).forEach(([peminatanName, courses]) => {
    const totalWeightedValue = courses.reduce((sum, course) => sum + (weightedValues[course] || 0), 0);
    scores[peminatanName] = totalWeightedValue;
  });

  // Find the highest score
  const highestScore = Math.max(...Object.values(scores));

  // Filter the specialties with the highest score
  const matchingSpecialties = Object.keys(scores).filter((peminatanName) => scores[peminatanName] === highestScore);

  // Join the matching specialties with " / "
  const recommendedSpecialty = matchingSpecialties.join(' / ');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  const generatePDF = () => {
    const pdfData = {
      matkul: dataMatkul,
      nilai: nilai,
      recomendedSpeciality: recommendedSpecialty,
      nama : name.name
    };

    return (
      <PDFDownloadLink document={<GeneratedPdf {...pdfData} />} fileName="hasil_rekomendasi.pdf">
        {({loading}) =>
          loading ? <button className='btn btn-primary mt-5 mb-5'>Generating PDF...</button> : <button className='btn btn-primary mt-5 mb-5'>Download Hasil Rekomendasi</button>
        }
      </PDFDownloadLink>
    );
  };
 
  


  // console.log(recommendedSpecialty);
  // console.log(scores);
  // console.log(nilai)
  // console.log(dataMatkul)
  return (
    <>
      <input type="text" placeholder='Input Nama' className='form-control mb-3' value={name.name} onChange={onChange} name="name" />
      {dataMatkul.map(({ semester, matkul }, index) => (
        <div key={index}>
          <Semester semester={semester} matakuliah={matkul} nilai={nilai} onNilaiChange={handleNilaiChange} />
        </div>
      ))}

      <h2 className='mt-4 mb-3'>Rekomendasi Peminatan: {recommendedSpecialty || 'RPL / KCV / KBJ'}</h2>

      {generatePDF()}
    </>
  );
};

export default NilaiMatkul;
