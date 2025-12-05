import { use, useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import padsData from "./pad.js"

function App() {
  const [name, setName] = useState("Joe")
  const [darkMode, setDarkMode] = useState(false)
  const [pads, setPads] = useState(padsData)
  const styles = {
    backgroundColor: darkMode? "#222222" : "#cccccc"  
  }
  function handleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  const buttonElements = pads.map(pad => (<button style={styles} key={pad.id}></button>))
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
