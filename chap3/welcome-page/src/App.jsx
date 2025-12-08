import { use, useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import padsData from "./pad.js"
import Pad from './components/Pad.jsx'

function App() {
  const [name, setName] = useState("Joe")
  const [darkMode, setDarkMode] = useState(false)
  const [pads, setPads] = useState(padsData)
  
  function handleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  // function toggle(event) {
  //   console.log(event.target)
  //   event.target.className = (event.target.className == "on") ? null : "on"
  //   console.log("clicked") 
  // }
  

  function toggle(id) {
    console.log(pads);
    setPads(prevPads => prevPads.map(item => {
      return item.id === id ? {...item, on: !item.on} : item
    }));
    console.log(pads);
  }

  const buttonElements = pads.map(pad => (
    
    <Pad id={pad.id} color={pad.color} toggle={toggle} on={pad.on} key={pad.id}/>  
  ))
  return (
    <main>
      <Header userName={name} />
      <Body userName={name} />
      <div className='pad-container'>
        {buttonElements}
      </div>
    </main>
  )
}

export default App
