import React, { useState } from 'react';
import './Item.css';

const Item = ({ children, edit, del, index }) => {
    const [disabled, setDisabled] = useState(true);

    const [value, setValue] = useState(children);

    const toggleInput = () => {
        setDisabled(!disabled);
    };

    const handleSubmit = () => {
        setDisabled(!disabled);
        edit(value, index);
    };

    return (
        <div className="item">
            <span className={!disabled ? 'item-label disabled' : 'item-label'} disabled={disabled}>{children}</span>
            <input type="text" className="item-input" onChange={(e) => setValue(e.target.value)} disabled={disabled} />
            <button type="button" className="item-edit" onClick={toggleInput} disabled={!disabled}>Edit</button>
            <button type="button" className="item-done" onClick={handleSubmit} disabled={disabled}>Done</button>
            <button type="button" className="item-delete" onClick={del} disabled={!disabled}>Delete</button>
        </div>
    );
}

export default Item;
