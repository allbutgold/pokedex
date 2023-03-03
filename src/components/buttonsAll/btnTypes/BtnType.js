const BtnType = (props) => {
    const type = props.type;
    return ( 
        <button onClick={() => {props.selectedTypeHandler(type)}}> {type.name}</button>
    );
}

export default BtnType;