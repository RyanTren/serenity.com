import './styles/musicPlayer.css';
import React, { useState, useEffect, useRef } from 'react';


function MusicPlayer() {
    const audioElement = new Audio('audio source');

    const AudioPlayer = ({ tracks }) => {
        // State
      const [trackIndex, setTrackIndex] = useState(0);
      const [trackProgress, setTrackProgress] = useState(0);
      const [isPlaying, setIsPlaying] = useState(false);
    }

    return (
        
        <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

            
                <h1>Serenity Music Player</h1>
            <div className="search-bar">
                <input className="search-field" type="text" placeholder="Search for a song"></input>
                <button className="search-button">Search</button>
            </div>


            <p>Here you can play different songs.</p>
            {/* Add your music player content here */}

            <footer className="music-bar">
                <div className ="song-details">
                    <img src="song-picture.png" alt="song picture goes here"></img>
                    <h3 alt="Song Title">Song Title</h3>
                    <p alt="Artist Name">Artist Name</p>
                </div>

                <button class="material-icons">pause</button>
                <button class="material-icons">play_arrow</button>
                <button class="material-icons">skip_next</button>
                <button class="material-icons">skip_previous</button>
                <button class="material-icons">repeat</button>
                <button class="material-icons">volume_up</button>
                <button class="material-icons">volume_down</button>
                <button class="material-icons">volume_mute</button>
                <button class="material-icons">volume_off</button>
            </footer>
        </>
    );
}

export default MusicPlayer;
