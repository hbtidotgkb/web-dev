function Header() {
    const motivation = "- Only The Educated Are Free";
    const motivationStyle = {
        paddingRight:'300px',
        fontStyle:'italic',
        color:'grey'
    };
    const element = 
    <div>
        <h1 align="center">Education For All</h1>
        <h4 align="right" style={motivationStyle}>{motivation}</h4>
    </div>
    return element;
}

export default Header;