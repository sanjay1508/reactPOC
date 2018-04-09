import React, { Component } from 'react';
import './App.css';
import Component1 from './Component1/Commponent1';
import Component2 from './Component2/Component2';

class App extends Component {
  state = {
    component: [
      {name:"Sanjay", age:"27"}
    ]
  }

  switchNameHandler = () => {
    // console.log("Was Clicked!!!!");
    this.setState({
      component: [
        {name: "Sanjay Samanta", age:"28"}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Component1 name={this.state.component[0].name} age={this.state.component[0].age}/>
        </div>
       
        <div>
          <Component2 click={this.switchNameHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
