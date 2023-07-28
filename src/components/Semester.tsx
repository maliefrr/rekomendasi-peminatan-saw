import React from 'react'


interface SemesterProps {
    semester : number,
    matakuliah : string[]
}

const Semester : React.FC<SemesterProps> = ({semester, matakuliah}) => {
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
                    <td><input type='text' placeholder={`Nilai Huruf ${matkul}`}/></td>
                </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Semester
