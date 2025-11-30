import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import quotesData from './quotesData'
import Quotes from './components/Quotes'
function App() {

  const [currentIndex, setCurrentIndex] = useState(0)
 
  const quoteElements = quotesData.map((quote) => (
        <Quotes quote={quote.quote} 
            author={quote.author}
      />
      ))

  function getRandomQuote() {
    setCurrentIndex(Math.floor(Math.random() * quotesDatac.length))
  }
  return (
    <>
      {quoteElements[currentIndex]}
      <button onClick={getRandomQuote}>
        get a new quote
      </button>
    </>
  )
}

export default App
