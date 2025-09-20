// import { useState } from 'react'

import Header from "./components/1-header/Header"
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="container">

<Header/>
<div className="divider"/>
<Hero/>
<div className="divider"/>
<Main/>
<div className="divider"/>
<Contact/>
<div className="divider"/>
<Footer/>







    
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </div>
  )
}

export default App
