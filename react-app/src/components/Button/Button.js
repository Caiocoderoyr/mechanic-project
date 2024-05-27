import "./Button.css"

function Button ({name}){
    return(
        <div className="buttonConteiner">
            <button className="buttonContent">{name}</button>
        </div>
    )
}

export default Button;