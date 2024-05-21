import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate
import Music from './Music'; // Import Music component
import Footer from './Footer.jsx'; // Import Footer component
import MusicPlayer from './MusicPlayer'; // Ensure this matches the filename exactly
import pfp from './assets/pfp.jpg';
import './styles/App.css';
import './styles/footer.css';
import './styles/musicPlayer.css';

function Home() {
  const navigate = useNavigate(); // Use useNavigate hook

  const handleButtonClick = () => {
    navigate('/musicplayer'); // Navigate to the MusicPlayer route
  };

  return (
    <div>
      <div className='homePage'>
        <div className="logoContainer">
          <h1 className="logo emitting-text">Serenity</h1>
          <p className="tagline">calming the nerves.</p>
        </div>
      </div>

      <div className='musicPage'>
        <Music />
        <button onClick={handleButtonClick}>Play Different Songs</button>
      </div>

      <div className='aboutMePage aboutMeContainer'>
        <h2>about the creator</h2>
        <img className='aboutMePfp' src={pfp} alt="Profile" />
        <hr className='lineSeperator' />
        <p className='aboutMeText'>Ryan Tran is a Computer Science Student concentrating in Artificial Intelligence. Listening to music gets us all in the zone: getting pumped for a workout, preparing for an 8-hour study session, or just vibing out in your bedroom. This passion project is a way for him to show others his music taste and develop skills in Front-End Development!</p>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="responsive">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musicplayer" element={<MusicPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
