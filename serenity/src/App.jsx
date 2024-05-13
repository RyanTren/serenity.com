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
    <>
        <div className='homePage'>
          <div className="logoContainer">
            <h1 className="logo emitting-text">Serenity  </h1>
            <div className="firework"></div>
            <div className="firework"></div>
            {/* <img className="globe-gif" src={ globe }/> */}
            <p className="tagline">calming the nerves.</p>
          </div>
        </div>
        
        <div className='musicPage'>
          <Music />
          <button href="">Play Different Songs</button>
        </div>

        <div className='aboutMePage'>
          <h2>about the creator</h2>
          <img className='aboutMePfp' src={ pfp }></img>
          <hr className='lineSeperator'></hr>
          <p className='aboutMeText'>Ryan Tran is a Computer Science Student concentrating in Artifical Intelligence. Listening to music get us all in the zone: getting pumped for a workout, preparing for a 8 hour study session, and just vibing out in your bedroom. This passion project is a way for him to show others his music taste and develop skills in Front-End Development!</p>
        </div>
            
        <div className='footerPage'>
          <Footer />
        </div>    
    </>
  )
}

document.addEventListener("DOMContentLoaded", function() {
  const container = document.querySelector('.container');
  const emittingText = document.querySelector('.emitting-text');

  emittingText.addEventListener('animationiteration', () => {
    const particle = document.createElement('div');
    particle.classList.add('firework-particle');
    particle.style.backgroundColor = randomColor();
    particle.style.opacity = Math.random() * 0.6 + 0.4; // Random opacity between 0.4 and 1.0
    particle.style.left = `${Math.random() * emittingText.offsetWidth}px`;
    container.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 2000); // Remove particle after 2 seconds
  });

  function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});




export default App