import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return(
        <React.Fragment>
            <input 
                type="text"
                name="userName"
                id="userName"
                className="userName"
                placeholder={props.initialData}
                onChange={props.updateUserSt}
                />
        </React.Fragment>
    );
};

export default UserInput;
