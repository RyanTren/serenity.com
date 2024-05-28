import './styles/musicPlayer.css';
import React, { useState, useEffect, useRef } from 'react';

const clientId = '8a81cc389cc649c081a108965c614247';
const clientSecret = '088c474ee4374d7cad41b9b5a2b325fb';

async function getAccessToken(clientId, clientSecret) {
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(`${clientId}:${clientSecret}`)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
}

async function searchTracks(query, accessToken) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    const data = await response.json();
    return data.tracks.items;
}


function MusicPlayer() {
    // const audioElement = new Audio('audio source');
    const [tracks, setTracks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchAccessToken = async () => {
        const token = await getAccessToken(clientId, clientSecret);
        return token;
    }

    const handleSearch = async () => {
        const token = await fetchAccessToken();
        const results = await searchTracks(searchQuery, token);
        setTracks(results);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <>
            <h1>Serenity Music Player</h1>
            <div className="search-bar">
                <input
                    className="search-field"
                    type="text"
                    placeholder="Search for a song"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                ></input>
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            {/* <p>Here you can play different songs.</p> */}

            <div className="search-results">
                {tracks.map((track) => (
                    <div key={track.id} className="track">
                        <img src={track.album.images[0].url} alt={track.name} />
                        <h3>{track.name}</h3>
                        <p>{track.artists.map(artist => artist.name).join(', ')}</p>
                    </div>
                ))}
            </div>

            <footer className="music-bar">

                <div className="song-details">
                    <img src="song-picture.png" alt="song picture goes here"></img>
                    <h3 alt="Song Title">Song Title</h3>
                    <p alt="Artist Name">Artist Name</p>
                </div>

                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                <button className="material-icons">pause</button>
                <button className="material-icons">play_arrow</button>
                <button className="material-icons">skip_next</button>
                <button className="material-icons">skip_previous</button>
                <button className="material-icons">repeat</button>
                <button className="material-icons">volume_up</button>
                <button className="material-icons">volume_down</button>
                <button className="material-icons">volume_off</button>

                <div>
                    <audio controls>
                        <source src="horse.ogg" type="audio/ogg"></source>
                        Your browser does not support the audio element.
                    </audio>
                </div>

            </footer>
        </>
    );
}

export default MusicPlayer;
