import React, { useState } from 'react'


interface SemesterProps {
    semester : number,
    matakuliah : string[]
}

const Semester : React.FC<SemesterProps> = ({semester, matakuliah}) => {
    const [nilai,setNilai] = useState<{[key : string]: string}>({})

    const handleNilaiChange = (matkul : string, nilai : string) => {
        setNilai((nilaiSebelum) => ({...nilaiSebelum, [matkul] : nilai}))
    }

    console.log(nilai)
  return (
    <>
      <h1>Semester {semester}</h1>
      <table>
        <thead>
          <th>Matakuliah</th>
          <th>Nilai Huruf</th>
        </thead>
        <tbody>
            {matakuliah.map((matkul,index) => (
                <tr key={index}>
                    <td>{matkul}</td>
                    <td><input type='text' placeholder={`Nilai Huruf ${matkul}`} value={nilai[index]} onChange={(e) => handleNilaiChange(matkul,e.target.value)}/></td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Semester
