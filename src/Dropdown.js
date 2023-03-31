import { useState } from "react";
import './dropdown.css';

export default function Dropdown(){

    const options = ['Yes', 'Probably not', 'Dropdown < Button :)'];

    const [items, setItems] = useState('');
    const [showItems, setShowItems] = useState(false);

    const handleItemClick = (item) => {
        setShowItems(false);
        setItems(item);
        return;
    }

    return(
        <>
        <div className="container">
            <div className="ques">Should you use a Dropdown?</div>
            <button className="btn"
            onMouseEnter={() => setShowItems(true)} 
            >
                {items || 'Select'} 
                <img src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"></img>
                </button>
                {showItems && (
                    <ul>
                    {options.map((item)=>
                    <li key={item} onClick={()=>handleItemClick(item)}>{item}</li>
                    )}
                </ul>
            )}
        </div>
        </>
    );
}