import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

    return(
        <input 
            type="text"
            name="userName"
            id="userName"
            className="userName"
            maxLength="21"
            placeholder={props.initialData}
            onChange={props.updateUserSt}/>
    );
    
};

export default UserInput;
