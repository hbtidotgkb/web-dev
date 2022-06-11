import bg_img from '../img/minionsBday.gif'

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