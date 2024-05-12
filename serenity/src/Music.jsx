import './styles/music.css';

function Music(){

    // const playlistId = '5QkfR9IxVNrJ1MUKsJDsHd';

    return(
        <div>
            <h2>Vibe With Me</h2>
            <p>House music, born in Chicago in the 1980s, blends disco, funk, and electronic elements, creating pulsating beats and soulful vocals that energize dance floors worldwide. Shoegaze, emerging in the UK in the late 1980s, envelops listeners in dreamy, ethereal soundscapes with distorted guitars and hazy vocals, inviting them into a mesmerizing sonic reverie. Chill R&B combines smooth melodies, laid-back rhythms, and soulful vocals, crafting a soothing atmosphere perfect for relaxation and introspection. Each genre offers a unique sonic journey, captivating audiences with its distinct style and emotive power.</p>
            <section>
                <ul>
                    <card className="card-cover">
                        {/* <img src="https://i.scdn.co/image/ab67616d0000b273c0f7b2a4a7a5b1e7c1d7b1f1" alt="Playlist Cover" />
                        <h3>Playlist Title</h3>
                        <p>Playlist Creator Name</p> */}
                        <iframe
                            title="Playlist 1"
                            src={`https://open.spotify.com/embed/playlist/3uZ0aiRXfVQGXvi7g01Yx9?si=20a6ee0782574456`}
                            
                            width="100%"
                            height="100%"
                            style={{ minHeight: '460px' }}
                            frameBorder="0"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                        />
                    </card>

                    <card className="card-cover">
                        <iframe
                                title="Playlist 2"
                                src={`https://open.spotify.com/embed/playlist/6EhwgkiAvhyXgMdmkeddBU?si=ea805ebbee0e4afb`}
                                
                                width="100%"
                                height="100%"
                                style={{ minHeight: '460px' }}
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                        />
                    </card>

                    <card className="card-cover">
                        <iframe
                                title="Playlist 3"
                                src={`https://open.spotify.com/embed/playlist/4rJFsPkalZKUxEJMs7CTB6?si=87b24684bd79426d`}
                                
                                width="100%"
                                height="100%"
                                style={{ minHeight: '460px' }}
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                        />
                    </card>
                </ul>
            </section>
        </div>
    );
}

export default Music;