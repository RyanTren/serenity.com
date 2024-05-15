// import { useState } from 'react'
import './styles/App.css'
import './styles/footer.css'
import Footer from './Footer'
import Music from './Music';
import pfp from './assets/pfp.jpg';
// import globe from './assets/globe.gif';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="responsive">
        <div className='homePage'>
          <div className="logoContainer">
            <h1 className="logo emitting-text">Serenity</h1>
            <p className="tagline">calming the nerves.</p>
          </div>
        </div>
        
        <div className='musicPage'>
          <Music />
        </div>

        <div className='aboutMePage'>
          <h2>about the creator</h2>
          <img className='aboutMePfp' src={ pfp }></img>
          <hr className='lineSeperator'></hr>
          <p className='aboutMeText'>Ryan Tran is a Computer Science Student concentrating in Artifical Intelligence. Listening to music get us all in the zone: getting pumped for a workout, preparing for a 8 hour study session, or just vibing out in your bedroom. This passion project is a way for him to show others his music taste and develop skills in Front-End Development!</p>
        </div>

        <Footer />
            
        {/* <div className='footerPage'>
          <Footer />
        </div>      */}
    </div>
  )
}

export default App