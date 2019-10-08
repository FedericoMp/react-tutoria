import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = (props) => {

    let item = [];
    if (props.users.length > 0) {
        props.users.map(
            user => {
                item.push(<ListItem key={user.id} name={user.name}/>);
                return item;
            }
        );
    }
    return (
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', marginTop:10 }}>
            { item }
        </div>
    );

};

export default List;
