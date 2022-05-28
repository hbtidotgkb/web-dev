function QueryForm() {
    return (
        <form method="POST" enctype='multipart/form-data' action="http://localhost:8081/storage/uploadFile">
            <label>Choose your file for upload:
            </label>
            <input type="file" name="file"/><br></br>
        </form>
    )
}

export default QueryForm;