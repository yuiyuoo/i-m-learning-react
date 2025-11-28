import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Contact from './Contact'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='contacts'>
      <Contact img="https://cdn-icons-png.flaticon.com/256/9559/9559031.png"
        name="Mr. Do"
        phone="01721643586*"
        mail="andrekn.do@gmail.com"
      />
      <Contact img="https://cdn-icons-png.flaticon.com/512/4329/4329449.png"
        name="Mai"
        phone="01521641823*"
        mail="maianhdo@gmail.com"
      />
      <Contact img="https://cdn-icons-png.flaticon.com/512/2945/2945448.png"
        name="Phuog"
        phone="01731562148*"
        mail="ntthuphuong0512@gmail.com"
      />
      <Contact img="https://cdn-icons-png.flaticon.com/512/1151/1151728.png"
        name="Anh"
        phone="01731015748*"
        mail="dongocanh@gmail.com"
      />
    </div>
  )
}

export default App
