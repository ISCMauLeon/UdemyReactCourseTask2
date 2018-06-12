import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    text: '',
    textLength: 0
  };

  textChangedHandler = (event) => {
    this.setState({
      text: event.target.value,
      textLength: event.target.value.length
    });
  }

  deleteHandler = (deleteIndex) => {
    let text = this.state.text.split('');
    text.splice(deleteIndex, 1);

    this.setState({
      text: text.join(''),
      textLength: text.length
    });
  }

  render() {
    let chars = (
      <div>
        {
          this.state.text.split('').map((character, index) => {
            let key = Math.ceil(Math.random() * 999999)
            return <CharComponent character={character} index={index} key={key} delete={this.deleteHandler}/>;
          })
        }
      </div>
    );
    
    return (

      <div className="App">
        <input type="text" className="inputStyle" value={this.state.text} onChange={this.textChangedHandler}/>
        <p>Text length: {this.state.textLength}</p>

      <ValidationComponent textLength={this.state.textLength}/>

      {chars}

      </div>
    );
  }
}

export default App;
