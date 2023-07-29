import React, { useState } from 'react';
import Semester from './Semester';

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

  console.log(nilai)
  return (
    <>
      {dataMatkul.map(({ semester, matkul }, index) => (
        <div key={index}>
          <Semester semester={semester} matakuliah={matkul} nilai={nilai} onNilaiChange={handleNilaiChange} />
        </div>
      ))}
    </>
  );
};

export default NilaiMatkul;
