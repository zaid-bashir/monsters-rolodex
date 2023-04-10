import { Component } from 'react';
import './App.css';

class App extends Component{
  //* Creating Constructor and Initialising Variables.
  constructor(){
    super();
    this.state = {
      name : "Zaid Bashir"
    };
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Hello! Welcome To React App Simple React Class Components
          </h1>

          {/* Accessing Variables In Curly Braces.*/}

          <h2>Welcome {this.state.name}</h2>

          {/* Using Button To Fire OnClick Events.*/}

          <button onClick={() => {
             //* Not Optimal Way for SetState Use.
             //* By this Way the State is not Up to Date After Click Action. It gets Updated After 2nd Click
            // this.setState({name : "Coding Rockers"})
            // console.log(this.state);

            //* By this Way the State is Up to Date After Every Click Action
            this.setState(
              () => {
                return {name : "Coding Rockers"};
              },
              //This Block is Optional
              () => {
                console.log(this.state);
              }
            );
          }} >Click Here</button>

          <br/>

          <a
            className="App-link"
            href="https://github.com/zaid-bashir/monsters-rolodex"
            target="_blank"
            rel="Visit Github Repo of this Project noreferrer"
          >
            Visit Github Repo of this Project
          </a>
        </header>
      </div>
    );
  }

}


export default App;
