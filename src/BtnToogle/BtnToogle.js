import React from 'react';

const BtnToogle = (props) => {
    const mainContainer = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' };
    const trueContainer = Object.assign({ background: 'green', color: 'white' }, mainContainer);
    const falseContainer = Object.assign({ background: 'red', color: 'white' }, mainContainer);

    return (
        <div style={mainContainer}>
            <button
                style={mainContainer} 
                onClick={props.updateBtnSt}>
                Toogle: {props.toogle}</button>
            { props.toogle ?
                <span style={trueContainer}>
                    value: true
                </span>
                :
                <span style={falseContainer}>
                    value: false
                </span>
            }
        </div>
    );
};

export default BtnToogle;