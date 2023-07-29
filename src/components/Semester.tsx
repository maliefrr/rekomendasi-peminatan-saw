import React from 'react';

interface SemesterProps {
  semester: number;
  matakuliah: string[];
  nilai: { [key: string]: string };
  onNilaiChange: (matkul: string, nilai: string) => void;
}

const Semester: React.FC<SemesterProps> = ({ semester, matakuliah, nilai, onNilaiChange }) => {
  return (
    <>
      <h1>Semester {semester}</h1>
      <table>
        <thead>
          <tr>
            <th>Matakuliah</th>
            <th>Nilai Huruf</th>
          </tr>
        </thead>
        <tbody>
          {matakuliah.map((matkul, index) => (
            <tr key={index}>
              <td>{matkul}</td>
              <td>
                <input
                  type='text'
                  placeholder={`Nilai Huruf ${matkul}`}
                  value={nilai[matkul] || ''} // Use default empty string if grade is not available
                  onChange={(e) => onNilaiChange(matkul, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Semester;
