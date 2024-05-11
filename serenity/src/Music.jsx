import './styles/music.css';

function Music(){
    return(
        <div>
            <h2>Explore New Music</h2>
            <p>Music is a form of art that uses sound organised in time. Music is also a form of entertainment that puts sounds together in a way that people like, find interesting or dance to. Most music includes people singing with their voices or playing musical instruments, such as the piano, guitar, drums or violin.</p>
            <section>
                <ul>
                    <card className="card-cover">
                        <img src="https://i.scdn.co/image/ab67616d0000b273c0f7b2a4a7a5b1e7c1d7b1f1" alt="Playlist Cover" />
                        <h3>Playlist Title</h3>
                        <p>Playlist Creator Name</p>
                    </card>

                    <card className="card-cover">
                        <img src="https://i.scdn.co/image/ab67616d0000b273c0f7b2a4a7a5b1e7c1d7b1f1" alt="Playlist Cover" />
                        <h3>Playlist Title</h3>
                        <p>Playlist Creator Name</p>
                    </card>

                    <card className="card-cover">
                        <img src="https://i.scdn.co/image/ab67616d0000b273c0f7b2a4a7a5b1e7c1d7b1f1" alt="Playlist Cover" />
                        <h3>Playlist Title</h3>
                        <p>Playlist Creator Name</p>
                    </card>
                </ul>
            </section>
        </div>
    );
}

export default Music;