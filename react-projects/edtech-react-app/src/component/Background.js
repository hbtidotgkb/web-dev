import bg_img from '../images/minionsImg.jpg'
const styleImg = {
     marginLeft: '25%',
     width: '50%'
}
export function Background() {
    return <div>
              <img src={bg_img} style={styleImg}/>
           </div>
}