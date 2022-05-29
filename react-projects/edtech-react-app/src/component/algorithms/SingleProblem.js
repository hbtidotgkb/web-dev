function SingleProblem(props) {
    const spanVideoLinkStyle = {
        textDecorations:'none',
        color:'red'
    }
    const spanNormalStyle = {
        textDecorations:'none',
        fontWeight:'normal'
    }
    const element =
    <div>
        <div>
        <div>
            <h4>Problem Title: 
                <span style={spanNormalStyle}>
                {"  "+props.name} [LC# 1] 
                   (<a href={"https://d26glhxwb4kju2.cloudfront.net/" +props.name+".mp4"} style={spanVideoLinkStyle}>Video Solution</a>)
                </span>
            </h4>
        </div>
        </div>
        <h4>Problem Description: 
            <span style={spanNormalStyle}>
            {"  "+props.desc}
            </span>
        </h4>
    </div>
    return element;
}

export default SingleProblem;