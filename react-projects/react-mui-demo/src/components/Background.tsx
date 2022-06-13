import bg_img from '../img/minionsBday.gif'

const styleImg = {
    //  marginLeft: '25%',
     width: '100%',
     zIndex: 1,
     position: 'absolute'
}

export const Background = () => {
    return (
        <div style={{zIndex:1}}>
            <img src={bg_img} />
        </div>
    )
}