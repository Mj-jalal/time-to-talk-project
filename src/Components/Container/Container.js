import "./Container.css"

const Container = (props) =>{
    return(
        <div className="container-fluid main-container">{props.children}</div>
    )
}


export default Container