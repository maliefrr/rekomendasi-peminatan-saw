import React from 'react';

interface SemesterProps {
  semester: number;
  matakuliah: string[];
  nilai: { [key: string]: string };
  onNilaiChange: (matkul: string, nilai: string) => void;
}

const Semester: React.FC<SemesterProps> = ({ semester, matakuliah, nilai, onNilaiChange }) => {
  // Define grade-to-weight mapping
  const gradeToWeight: { [grade: string]: number } = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    E: 0,
  };

  return (
    <>
      <h1>Semester {semester}</h1>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Matakuliah</th>
            <th scope='col'>Nilai Huruf</th>
          </tr>
        </thead>
        <tbody>
          {matakuliah.map((matkul, index) => (
            <tr key={index}>
              <td>{matkul}</td>
              <td>
                <select
                  value={nilai[matkul] || ''} // Use default empty string if grade is not available
                  onChange={(e) => onNilaiChange(matkul, e.target.value)}
                  className='form-select'
                >
                  <option value="">-- Nilai Huruf --</option>
                  {/* Map the grade options to corresponding weights */}
                  {Object.entries(gradeToWeight).map(([grade]) => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Semester;
