import HyperLink from "./HyperLink";
function NavBar() {
    const style = {
        color:"blue",
    };
    const menus = ['About', 'Class-X', 'Class-XII', 'Fun With Algorithms!', 'Spiritual Gyaan'];
    let menu = [];
    for(let i=0;i<menus.length;i++) {
      menu.push(<HyperLink name={menus[i]} link={"/"+menus[i]}/>);
    }
      const element = 
          <div>
             <div align="center" style={style}>{menu}</div>
          </div>
  
      return element;
  }
export default NavBar;