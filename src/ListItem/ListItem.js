import React from 'react';

const ListItem = (props) => {

    console.log('[ListItem.js] render ListItem component');
    return (
        <div style={{ display:'flex', width: '100%', margin: '5px 0' }}>
            <span style={{ display:'flex', flex: '1' }}>{props.name}</span>
            <button onClick={props.delIt}> X </button>
        </div>
    );

};

export default ListItem;
