import React from 'react';
import ListItem from '../ListItem/ListItem';

const List = (props) => {

    let item = [];
    if (props.users.length > 0) {
        props.users.map(
            (user, index) => {
                item.push(<ListItem key={index} name={user.name} delIt={() => props.deleteItem(user.id)}/>);
                return item;
            }
        );
    }
    return (
        <div style={{ display:  'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', marginTop:10 }}>
            { item }
        </div>
    );

};

export default List;
