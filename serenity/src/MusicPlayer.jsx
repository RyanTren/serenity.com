import './styles/musicPlayer.css';
import { useState, useRef, useEffect } from 'react';

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
    const [tracks, setTracks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentTrack, setCurrentTrack] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioElement = useRef(null);

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

    const playTrack = async (track) => {
        if (audioElement.current) {
            audioElement.current.src = track.preview_url;
            try {
                await audioElement.current.play();
                setCurrentTrack(track);
                setIsPlaying(true);
            } catch (error) {
                console.error('Error playing track:', error);
            }
        }
    }

    const handlePlayPause = () => {
        if (audioElement.current) {
            if (isPlaying) {
                audioElement.current.pause();
            } else {
                audioElement.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        if (audioElement.current) {
            audioElement.current.addEventListener('ended', () => setIsPlaying(false));
        }
    }, []);

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

            <div className="search-results">
                {tracks.map((track) => (
                    <div key={track.id} className="track" onClick={() => playTrack(track)}>
                        <img src={track.album.images[0].url} alt={track.name} />
                        <h3>{track.name}</h3>
                        <p>{track.artists.map(artist => artist.name).join(', ')}</p>
                    </div>
                ))}
            </div>

            <footer className="music-bar">
                <div className="song-details">
                    {currentTrack && (
                        <>
                            <h3>{currentTrack.name}</h3>
                            <p>{currentTrack.artists.map(artist => artist.name).join(', ')}</p>
                        </>
                    )}
                </div>


                <div>
                    <audio className="audio-player" ref={audioElement} controls>
                        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
                        <button className="material-icons" onClick={handlePlayPause}>{isPlaying ? 'pause' : 'play_arrow'}</button>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </footer>
        </>
    );
}

export default MusicPlayer;
