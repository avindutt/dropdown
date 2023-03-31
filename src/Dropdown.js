import { useState } from "react";

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
        <div>
            <div>Should you use a Dropdown?</div>
            <button 
            onMouseEnter={() => setShowItems(true)} 
            >
                {items || 'Select'} 
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