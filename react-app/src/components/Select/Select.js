import "./Select.css"

function Select (){
    return(
        <div className="selectConteiner">
            <select className="selectContent">
                <option disabled selected >Opção de login</option>
                <option>Administrador</option>
                <option>Escritório</option>
                <option>Retífica</option>
            </select>
        </div>
    )
}

export default Select;