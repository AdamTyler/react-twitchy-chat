import React, { Component } from 'react';
import ChatWindow from './components/ChatWindow'
import logo from './at.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App tc">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">react-twitchy-chat</h1>
        </header>
        <div className='App-container'>
          <ChatWindow id={'chat1'} title={'TestChat'} onSubmit={this.sendChat} />
        </div>
      </div>
    );
  }

  sendChat = (id, msg, opts={}) => {
    console.log('sendChat', id, msg, opts)
  }
}

export default App;
