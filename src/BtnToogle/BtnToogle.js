import React from 'react';

const BtnToogle = (props) => {
    console.log('[BtnToogle.js] render BtnToogle component');

    const mainContainer = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' };
    const trueContainer = Object.assign({ background: 'green', color: 'white', height: 5 }, mainContainer);
    const falseContainer = Object.assign({ background: 'red', color: 'white', height: 5 }, mainContainer);

    let toogle;
    let hideVal = props.toogle ? 'Display list' : 'Hidden list';
    
    (props.toogle)
    ?   toogle = <span style={trueContainer}></span>
    :   toogle = <span style={falseContainer}></span>;

    return (
        <div style={mainContainer}>
            <button
                style={mainContainer} 
                onClick={props.updateBtnSt}>
                { hideVal }</button>
            { toogle }
        </div>
    );
};

export default BtnToogle;