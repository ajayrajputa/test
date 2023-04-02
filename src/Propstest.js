function Propstest(props) {

    return <h1>Hello {props.name}</h1>
}

function hello() {
    return (
        <div>
            <Propstest name="ajay" />
        </div>
    )
}
export default Propstest
