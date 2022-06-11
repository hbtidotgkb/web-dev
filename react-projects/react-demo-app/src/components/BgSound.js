import song from '../sound/song.mp3';

function BgSound() {
    return <div>
            <audio src={song} controls autoplay />
        </div>
}

export default BgSound;