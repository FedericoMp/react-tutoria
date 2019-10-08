import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return(
        <React.Fragment>
            <p className="copy" 
               style={{ margin:'0px', marginBottom:'10px' }}>
               <strong style={{ marginRight:'5px' }}>-</strong> 
               <span>{props.user}</span>
            </p>
        </React.Fragment>
    );
};

export default UserOutput;
