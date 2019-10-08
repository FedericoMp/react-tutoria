import React from 'react';

const BtnToogle = (props) => {
    const mainContainer = { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%' };
    const trueContainer = Object.assign({ background: 'green', color: 'white' }, mainContainer);
    const falseContainer = Object.assign({ background: 'red', color: 'white' }, mainContainer);

    let toogle;
    let toogleVal = props.toogle ? 'true' : 'false';
    (props.toogle)
    ?   toogle = (
                  <span style={trueContainer}>
                    value:  { toogleVal } 
                  </span>
                 )
    :   toogle = (
                    <span style={falseContainer}>
                        value:  { toogleVal } 
                    </span>
                 );

    return (
        <div style={mainContainer}>
            <button
                style={mainContainer} 
                onClick={props.updateBtnSt}>
                Toogle: { toogleVal }</button>
            { toogle }
        </div>
    );
};

export default BtnToogle;