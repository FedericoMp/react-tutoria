import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    console.log('[UserOutput.js] render UserOutput component');

    return(
        <React.Fragment>
            <p className="copy" 
               style={{ margin:0 , marginBottom:10 }}>
               <strong style={{ marginRight:5 }}>-</strong> 
               <span>{props.user}</span>
            </p>
        </React.Fragment>
    );

};

export default UserOutput;
