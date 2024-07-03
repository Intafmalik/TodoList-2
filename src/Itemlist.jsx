import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = (props) => {

    const [deletList , setNewlist] = useState(false)
    const InputEvent = ()=>{
        setNewlist(true)

    }
    return (
        <>
            <div className='list'>
                <li className={deletList ? "deletItem" : "item"} >
                <button onClick={InputEvent}>
                <DeleteIcon variant='contained' color='primary' />
                </button>
                    {props.text}
                </li>
            </div>
        </>
    );

}

export default ItemList;