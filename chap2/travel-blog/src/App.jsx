import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'

import data from './data'

function App() {

  const entryElements = data.map((entry) => {
    return (<Entry 
              key={entry.id}
              entry={entry}
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
