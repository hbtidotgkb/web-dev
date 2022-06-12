// import bdayVideo from '../video/bdayVideo.mp4';

export const BgVideo = () => {
    return (
        <video
           autoPlay
           loop
           style={{
            width:"100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover"
           }}
           >
            {/* <source src={bdayVideo} type="video/mp4"/> */}
        </video>
    )
}