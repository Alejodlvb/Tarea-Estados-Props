import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './Contador'
import TarjetaUsuario from './TarjetaUsuario'
import ListaUsuarios from './ListaUsuarios'


function App() {
  const usuarios = [
    { nombre: "Juan Pérez", edad: 30, profesion: "Ingenerio"},
    { nombre: "Ana Garcia", edad: 35, profesion: "Diseñadora"},
    { nombre: "Luis Rodriguez", edad: 35, profesion: "Profesor"}
  ]

  return (
    <div>
      <Contador/>
      <h1>Lista de Usuarios</h1>
      <ListaUsuarios usuarios={usuarios}/>
    </div>
  )
}

export default App
