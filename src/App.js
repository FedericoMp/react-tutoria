import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import BtnToogle from './BtnToogle/BtnToogle';
import List from './List/List';
import Separator from './Separator/Separator';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    console.info('[App.js] constructor');
    this.state = {
      userName: 'Name to update' ,
      inputMsj: 'Empty input data...',
      toogle: false,
      users: [
        { id: '1_asd', name: 'Tester 1' },
        { id: '2_qwe', name: 'Tester 2' },
        { id: '3_zxc', name: 'Tester 3' },
      ],
      clicker: 'Hello clicker :)',
      toogleClick: false
    };
    // esto es mejor que bindear o arrow en render(), porque el constructor se ejecuta una vez
    // otro approach seria utilizar arrow function como propiedad de la clase, de esta forma esto queda omitido
    // this.clickHandler = this.clickHandler.bind(this);
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

  // definir una arrow function como propiedad de la clase
  // si se genera un metodo, no se podria utilizar 'this'
  // tendria que utilizarse .bind() u arrow func. en render
  // pero esto es otro approach
  clickHandler = () => {
    const clickState = !this.state.toogleClick;
    this.setState({toogleClick: clickState});
    const newClicker = 'Good Bye clicker :)';
    clickState
      ? this.setState({clicker:newClicker})
      : this.setState({clicker:'Hello clicker :)'});
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps()', props);
    return state;
  }

  render () {
    console.log('[App.js] render()');
    let listItem = null;
    if(this.state.toogle === true) 
        listItem = (<List users={this.state.users}
                          deleteItem={(index) => {this.deleteItem(index)}}/>);

      return (
        <div className="container">
          <img src={this.props.hero}
               alt={this.props.title}
               height="40"
               width="40"
               />
          <h3 style={{margin: '5px 0'}}>{this.props.title}</h3>
          
          <Separator/>{/* //////////////////////////////////// */}
            
            <UserInput  updateUserSt={this.updateUserState}
                        initialData={this.state.inputMsj}/>
            <UserOutput user={this.state.userName}/>

          <Separator/>{/* //////////////////////////////////// */}
            
            <BtnToogle  updateBtnSt={() => this.updateBtnState()}
                        toogle={this.state.toogle}/>  
            { listItem }
            
          <Separator/>{/* //////////////////////////////////// */}
          
            <span>{this.state.clicker}</span>
            {/* 
              Para bindear eventos: 
              onClick={this.clickHandler()} -> da error, porque no esta la referencia de 'this'
              Se puede solucionar con:
              - onClick={this.clickHandler.bind(this)} -> metodo: .bind()
              - onClick={() => this.clickHandler()} -> arrow function: () => {} 
              - en el constructor definir una propiedad y usar bind
                constructor() { this.clickHandler = this.clickHandler.bind(this) };
                onClick={this.clickHandler} -> arrow function: () => {} 
            */}
            <button style={{ width: '100%', marginTop: 10 }} onClick={this.clickHandler}>Click</button>
        </div> 
      );
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount()');
  }
}

export default App;
