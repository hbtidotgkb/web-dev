import bg_img from '../img/minionsImg.jpg'
const styleImg = {
     marginLeft: '25%',
     width: '50%'
}

export const Background = () => {
    return (
        <div>
            <img src={bg_img} style = {styleImg} />
        </div>
    )
}