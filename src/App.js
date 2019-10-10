import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import BtnToogle from './BtnToogle/BtnToogle';
import List from './List/List';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Name to update' ,
      inputMsj: 'Empty input data...',
      toogle: false,
      users: [
        { id: '1_asd', name: 'Tester 1' },
        { id: '2_qwe', name: 'Tester 2' },
        { id: '3_zxc', name: 'Tester 3' },
      ]
    };
  }

  updateUserState = (e) => {
    (e.target.value.length === 0)
      ? this.setState({ userName: 'Waiting to be updated' })
      : (e.target.value.length === 21)
          ? this.setState({ userName: 'To much chars, only 21' })
          : this.setState({ userName: e.target.value })
  };

  updateBtnState = () => {
    this.setState((state) => ({ toogle: !state.toogle }));
  };

  deleteItem = (personItem) => {
    // const users = this.state.users.slice(); // old school
    const users = [...this.state.users]; // es6
    const personIndex = users.findIndex( user => user.id === personItem );
    users.splice(personIndex, 1);
    this.setState({ users: users });
    if (users.length === 0) {
      this.setState((state) => ({ toogle: !state.toogle }));
      this.setState({users: [
        { id: '1_asd', name: 'Tester 1' },
        { id: '2_qwe', name: 'Tester 2' },
        { id: '3_zxc', name: 'Tester 3' },
      ]});
    }
  }

  render () {

    let listItem = null;
    if(this.state.toogle === true) 
        listItem = (<List users={this.state.users}
                          deleteItem={(index) => {this.deleteItem(index)}}/>);
         
      return (
        <div className="container">
          <UserInput  updateUserSt={this.updateUserState}
                      initialData={this.state.inputMsj}/>
          
          <UserOutput user={this.state.userName}/>
          
          <BtnToogle  updateBtnSt={() => this.updateBtnState()}
                      toogle={this.state.toogle}/>  

          { listItem }
        </div> 
      );
  }

}

export default App;
