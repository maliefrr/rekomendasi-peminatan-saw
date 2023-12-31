import React, { useState } from 'react';
import Semester from './Semester';
// import { PDFDownloadLink } from '@react-pdf/renderer';
// import GeneratedPdf from './GeneratedPdf';

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

  const peminatan = {
    RPL: ['Algoritma dan Pemrograman', 'Pemrograman Dasar', 'Pemrograman Web', 'Sistem Basis Data', 'Sistem Basis Data Lanjut', 'Analisis dan Perancangan Sistem', 'Sistem Informasi'],
    KCV: ['Algoritma dan Pemrograman', 'Matematika Diskrit', 'Probabilitas dan Statistika', 'Metode Numerik', 'Struktur Data', 'Kecerdasan Buatan', 'Kalkulus 1', 'Kalkulus 2'],
    KBJ: ['Algoritma dan Pemrograman', 'Matematika Diskrit', 'Jaringan Komputer', 'Sistem Operasi', 'Sistem Berkas', 'Interaksi Manusia dan Komputer', 'Komunikasi Data', 'Organisasi dan Arsitektur Komputer'],
  };

  const gradeToWeight: { [grade: string]: number } = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    E: 0,
  };

  const weightedValues: { [course: string]: number } = {};

  dataMatkul.forEach(({ matkul }) => {
    matkul.forEach((course) => {
      const grade = nilai[course];
      const weight = gradeToWeight[grade] || 0;
      weightedValues[course] = weight;
    });
  });

  // const calculateScore = () => {
  //   const selectedCourses = peminatan[userInput.peminatan as keyof typeof peminatan] || [];
  //   const totalWeightedValue = selectedCourses.reduce((sum : number, course : string) => sum + (weightedValues[course] || 0), 0);

  //   let score = totalWeightedValue;

  //   if (userInput.status === 'pribadi') {
  //     score += 10;
  //   } else if (userInput.status === 'teman') {
  //     score += 5;
  //   } else if (userInput.status === 'tidak') {
  //     score -= 5;
  //   }

  //   return score;
  // };

  const scores: { [peminatan: string]: number } = {};
  
  
  
  Object.entries(peminatan).forEach(([peminatanName, courses]) => {
    const totalWeightedValue = courses.reduce((sum, course) => sum + (weightedValues[course] || 0), 0);
    scores[peminatanName] = totalWeightedValue;
  });
  // userInput.status === "pribadi" ? scores[userInput.peminatan] += 4 : userInput.status === "dosen" ? scores[userInput.peminatan] += 3 : userInput.status === "teman" ? scores[userInput.peminatan] += 2 : userInput.status === "tidak" ? scores[userInput.peminatan] += 1 : scores[userInput.peminatan] += 0

  // const highestScore = Math.max(...Object.values(scores));

  // const matchingSpecialties = Object.keys(scores).filter((peminatanName) => scores[peminatanName] === highestScore);

  // const recommendedSpecialty = matchingSpecialties.join(' / ');

// console.log(scores)
// console.log(calculateScore())

  // const generatePDF = () => {
  //   const pdfData = {
  //     matkul: dataMatkul,
  //     nilai: nilai,
  //     recomendedSpeciality: recommendedSpecialty,
  //     nama: userInput.name,
  //     nim : userInput.nim,
  //     peminatan : userInput.peminatan
  //   };

  //   return (
  //     <PDFDownloadLink document={<GeneratedPdf {...pdfData} />} fileName={`hasil rekomendasi ${userInput.nim}.pdf`}>
  //       {({ loading }) =>
  //         loading ? (
  //           <button className='btn btn-primary mt-5 mb-5'>Generating PDF...</button>
  //         ) : (
  //           <button className='btn btn-primary mt-5 mb-5'>Download Hasil Rekomendasi</button>
  //         )}
  //     </PDFDownloadLink>
  //   );
  // };

  return (
    <>
    <div className="main-content">
        <h1 className='mb-5 title'>Sistem Pendukung Keputusan Peminatan Jurusan Teknik Informatika UHO</h1>
      
      {dataMatkul.map(({ semester, matkul }, index) => (
        <div key={index}>
          <Semester semester={semester} matakuliah={matkul} nilai={nilai} onNilaiChange={handleNilaiChange} />
        </div>
      ))}

      {/* <h2 className='mt-4 mb-3'>
        {userInput.peminatan == "" ? "" : recommendedSpecialty === userInput.peminatan
          ? 'Kamu Cocok dengan peminatan yang kamu pilih'
          : `Kamu kurang cocok untuk peminatan ini. Rekomendasi peminatan : ${recommendedSpecialty}`}
      </h2> */}

      {/* <div className="button-container">
        {generatePDF()}
      </div> */}
      </div>
    </>
  );
};

export default NilaiMatkul;
