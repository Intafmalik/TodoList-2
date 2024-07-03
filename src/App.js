import logo from './logo.svg';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { IoIosAddCircle } from "react-icons/io";
import './App.css';
import ItemList from './Itemlist';
import { useState } from 'react';

function App() {
  const [item, setItem] =  useState("")
  const [list , setOrder] = useState([])
  const InputEvent = (event)=>{
      setItem(event.target.value)
  }
  const itemList = ()=>{
      setOrder((oldValue)=>{
        return [...oldValue , item]
      })
      setItem("")
  }
  return (
    <>
      <div className="mainDiv">
      <h2>TO-DO list</h2>
        <div className="centreDiv">
          <h2>{item}</h2>
          <div className='order'>
            <input type="text" placeholder="order your list" value={item} onChange={InputEvent} />
            <button onClick={itemList}><IoIosAddCircle className='addBtn' /></button>
          </div>
            <ol>
            {
              list.map((val)=>{
                return <ItemList text={val} /> 
              })
            }
            </ol>
        </div>
      </div>
    </>
  );
}

export default App;
