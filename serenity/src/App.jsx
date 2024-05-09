// import { useState } from 'react'
import './App.css'
import './styles/footer.css'
import Footer from './Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className='homePage'>
          <h1 className="logo">Serenity</h1>
          <p className="tagline">calming the nerves.</p>
        </div>
        
        <div className='musicPage'>
          <h2>music page</h2>
        </div>

        <div className='aboutMePage'>
          <h2>about me page</h2>
        </div>
            
        <div className='footerPage'>
          <Footer />
        </div>    
    </>
  )
}



export default App