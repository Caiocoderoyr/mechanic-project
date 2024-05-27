import Input from "../Input/Input.js";
import Select from "../Select/Select.js";
import Button from "../Button/Button.js";
import "./LoginBox.css"

function LoginBox(){
    return(
        <div className='loginBoxContainer'>
            <h1 className='loginBoxContent'>Login</h1>
            <Select/>
            <Input/>
            <Button name={"Entrar"}/>
        </div>
    )
}

export default LoginBox;