// import { useState } from 'react'
import './App.css'
import './styles/footer.css'
import Footer from './Footer'
import pfp from './assets/pfp.jpg';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className='homePage'>
          <div className="logoContainer">
            <h1 className="logo">Serenity</h1>
            <p className="tagline">calming the nerves.</p>
          </div>
        </div>
        
        <div className='musicPage'>
          <h2>music page</h2>
        </div>

        <div className='aboutMePage'>
          <h2>about me page</h2>
          <img className='aboutMePfp' src={ pfp }></img>
          <hr className='lineSeperator'></hr>
          <p className='aboutMeText'>Ryan Tran is a Computer Science Student learning Front-end Development on the side. Listening to music takes him away from all the stress. Maybe his music will calm your nerves.</p>
        </div>
            
        <div className='footerPage'>
          <Footer />
        </div>    
    </>
  )
}



export default App