import './App.css';
import { useState } from "react"

import Espiral from './assets/EkVgv4UXYAIPnFe.jpg'
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState';


function App() {
  const [name] = ("Joaquim")
  const [userName, userNome] = useState("Mario")

  const cars = [
    {id: 1, brand: "Ferrari", color:"Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Ferrari", color:"Amarelo", newCar: true, km: 0},
    {id: 3, brand: "Ferrari", color:"Amarelo", newCar: true, km: 0},
  ]

  function showMessage() {
    console.log("Mensagem exibida")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/Dragoes_Metalicos.webp" width="250" alt="Banda de rock" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img width="250" src={Espiral} alt="" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* desestruturação */}
      <button onClick={() => (userNome("MAAAA"))}>Mudar nome</button>
      <CarDetails brand="VW" km={10000} color="Azul" newCar={true}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="Verde" km={55000} newCar={false}/>
      <CarDetails brand="Fiat" color="Branco}" km={55000} newCar={true}/>
      { /* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      { /* fragmentando */}
      <Fragment />
      { /* children */}
      <Container myValue="teste teste">
        <p>MEEEEEEEEEEE</p>
      </Container>
      { /* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      { /* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
}

export default App;
