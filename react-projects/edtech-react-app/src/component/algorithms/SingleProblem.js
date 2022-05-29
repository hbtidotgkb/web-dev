function SingleProblem(props) {
    const element =
    <div>
        <h4>Problem Title: {props.name}</h4>
        <h4>Problem Description: </h4><p>{props.desc}</p>
        <a href={"https://d26glhxwb4kju2.cloudfront.net/" +props.name+".mp4"}>Two Sum Video Solution</a>
    </div>
    return element;
}

export default SingleProblem;