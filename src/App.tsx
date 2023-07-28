import {useState, ChangeEvent} from 'react'

interface Sum {
  a: string,
  b: string
}

function App() {
  const [userInput,setUserInput] = useState<Sum>({
    a: "",
    b: ""
  })

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  const getSum  = (value1: string, value2 :string) => {
    const a = parseInt(value1)
    const b = parseInt(value2)

    if(isNaN(a) || isNaN(b)) {
      return 0
    } else {
      return a + b
    }

  }

  return (
    <>
    <p>{getSum(userInput.a, userInput.b)}</p>
    <div className="sem1">
      <div className="matkul">
        <label htmlFor="">Agama</label>
        <input type="number" onChange={handleChange} name='a'/>
      </div>
      <input type="number" onChange={handleChange} name='b'/>
    </div>
    </>
  )
}

export default App
