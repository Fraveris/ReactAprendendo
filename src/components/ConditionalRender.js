import { useState } from 'react'

const ConditionalRender = () => {
    const [x, setVerdade] = useState(false)

    const [name, setNome] = useState("Jo")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <button onClick={() => setVerdade(true)}>Vira verdade</button>
        {name === "João" ? (
            <div>
                <p>Nome joão</p>
            </div>
        ) : (
            <div>
                <p>Nome não-joão</p>
            </div>
        )}
        <button onClick={() => setNome("João")}>Bota o nome pra João</button>
    </div>
  )
}

export default ConditionalRender