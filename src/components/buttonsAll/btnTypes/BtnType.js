const BtnType = (props) => {
    const type = props.type;
    return ( 
        <button>{type.name}</button>
    );
}

export default BtnType;