import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

import data from './data'
function App() {

  const entryElements = data.map((entry) => {
    return (<Entry img={entry.img}
              title={entry.title}
              country={entry.country}
              ggMapsLink={entry.googleMapsLink}
              dates={entry.dates}
              text={entry.text}
    />)
  })
  return ( 
    <>
    <Header />
    {entryElements}
    </>
  )
}

export default App
