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
            <div>
                <h1>Serenity Music Player</h1>
                <input type="text" placeholder="Search for a song"></input>
                <button className="search-button">Search</button>
            </div>


            <p>Here you can play different songs.</p>
            {/* Add your music player content here */}

            <footer className="music-bar">
                <div className ="song-details">
                    <img src="song-picture.png" alt="song picture goes here"></img>
                    <h3>Song title</h3>
                    <p>Artist name</p>
                </div>
                <i class="material-icons">pause</i>

                <i class="material-icons">play_arrow</i>

                <i class="material-icons">skip_next</i>
                <i class="material-icons">skip_previous</i>
                <i class="material-icons">repeat</i>
                <i class="material-icons">volume_up</i>
                <i class="material-icons">volume_down</i>
                <i class="material-icons">volume_mute</i>
                <i class="material-icons">volume_off</i>
            </footer>
        </>
    );
}

export default MusicPlayer;
