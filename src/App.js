import React, { useState } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import BtnToogle from './BtnToogle/BtnToogle';
import List from './List/List';
import './App.css';

const App = () => {
  
  const userInterface = { userName: 'Name to update' };
  const inputInterface = { inputMsj: 'Empty input data...' };
  const btnInterface = { toogle: false };
  const listInterface = {
    users: [
      { id: 1, name: 'Tester 1' },
      { id: 2, name: 'Tester 2' },
      { id: 3, name: 'Tester 3' },
    ]
  }

  const [userState, setUserState] = useState(userInterface);
  const [inputState] = useState(inputInterface);
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
                  toogle={btnState.toogle}/>  

      <List users={listInterface.users}/>
    </div> 
  );

}

export default App;
