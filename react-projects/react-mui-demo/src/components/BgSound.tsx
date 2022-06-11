import song from '../audio/sound.mp3';
export const BgSound = () => {
    return (
        <div>
            <audio src={song} controls autoPlay/>
        </div>
    )
}