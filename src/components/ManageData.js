import { useState } from 'react'

const ManageData = () => {

    let someData = 10;

    const [number, setNumber] = useState(10)

  return (
    <div>
        <div>
            <p>valor: {number}</p>
            <button onClick={() => setNumber(25)}>A 5</button>
        </div>
    </div>
  )
}

export default ManageData