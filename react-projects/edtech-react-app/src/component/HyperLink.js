import { render } from "@testing-library/react";

function HyperLink(props) {
        const linkStyle = {
            color:"blue",
            paddingLeft:'50px',
            textDecoration:'none',
            height:'100px',
        };
    
    const element = 
    <a style={linkStyle} href={props.link}>{props.name}</a>
    return element;
}

export default HyperLink;