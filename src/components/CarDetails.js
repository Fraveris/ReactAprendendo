import React from 'react'

const CarDetails = ({ brand, km, color, newCar}) => {
  return (
    <div>
        <h2></h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>Carro é novo</p>}
        {!newCar && <p>Carro né novo</p>}
    </div>
  )
}

export default CarDetails