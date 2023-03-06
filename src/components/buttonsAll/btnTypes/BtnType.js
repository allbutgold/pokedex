// library import
import {useState} from "react"

import styles from './btnType.module.scss';

const BtnType = (props) => {

    const type = props.type;
    
    const [isActive, setActive] = useState(false);
    const toggleObject = {}

    

    if(isActive) {
        toggleObject.className = 'btnTypeActive'
    } else {
        toggleObject.className = 'btnTypeNotActive'
    }

    const handleToggle = () => {
        setActive(!isActive);
    };

    return ( 
        <button className={styles.toggleObject} onClick={() => {props.selectedTypeHandler(type)}}> {type.name}</button>
    );
}

export default BtnType;