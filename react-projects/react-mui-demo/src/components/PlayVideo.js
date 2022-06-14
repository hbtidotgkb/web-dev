import bdayVideo from '../video/bdayVideo.mp4';

const styleImg = {
    marginLeft: '25%',
}

const PlayVideo = () => {
    return (
        <div style={styleImg}>
        <video src={bdayVideo} controls autoPlay loop muted
            style={{width:"65%",
            left: "50%",
            top: "50%",
            height: "50%",}}
        ></video>
        </div>
    )
}

export default PlayVideo