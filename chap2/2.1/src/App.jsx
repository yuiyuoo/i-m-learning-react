import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
function App() {

  const firstName = "Joe"
  const lastName = "Schmoe"
  return ( 
    <>
    <Header />
    <Entry />
    <h1>Hello {firstName} {lastName}</h1>
    </>
  )
}

export default App
