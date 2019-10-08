import React, { useState } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import BtnToogle from './BtnToogle/BtnToogle';
import './App.css';

const App = () => {
  
  const userInterface = { userName: 'Name to update' };
  const inputInterface = { inputMsj: 'Empty input data...' };
  const btnInterface = { toogle: false };

  const [userState, setUserState] = useState(userInterface);
  // eslint-disable-next-line
  const [inputState, setInputState] = useState(inputInterface);
  const [btnState, setBtnState] = useState(btnInterface);

  const updateUserState = (e) => {
    setUserState({ userName: e.target.value })
  };
  const updateBtnState = () => {
    const btnToogle = btnState.toogle;
    setBtnState({ toogle: !btnToogle });
  };

  return (
    <div className="container">
      <UserInput  updateUserSt={updateUserState}
                  initialData={inputState.inputMsj}/>
      
      <UserOutput user={userState.userName}/>
      
      <BtnToogle  updateBtnSt={updateBtnState}
                  toogle={btnState.toogle}
      />  
    </div> 
  );

}

export default App;
