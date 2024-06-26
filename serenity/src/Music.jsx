import './styles/music.css';

function Music(){

    // const playlistId = '5QkfR9IxVNrJ1MUKsJDsHd';

    return(
        <div>
            <h2>Discover Music</h2>
            <p>Discover 300+ Songs from my 4 curated playlist of wonderful vocals and instrumentals. One to party, one to feel, one to relax, and a bonus... K-POP! Enjoy the show.</p>
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
                            style={{ minHeight: '400px' }}
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
                                style={{ minHeight: '400px' }}
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
                                style={{ minHeight: '400px' }}
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                        />
                    </card>

                    <card className="card-cover">
                        <iframe
                                title="Playlist 4"
                                src={`https://open.spotify.com/playlist/75kLlaoB7fvgMpBcAHXFXc?si=507a5f6f318c4837`}
                                
                                width="100%"
                                height="100%"
                                style={{ minHeight: '400px' }}
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