import React, { Component } from 'react';
import ChatWindow from './components/ChatWindow'
import logo from './at.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      messages: [
        { text: 'hi', sender: 'lazy9669', time: '123'},
        { text: 'hello', sender: 'thedude', time: '123345'}
      ]
    }
  }

  render () {
    return (
      <div className="App tc">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">react-twitchy-chat</h1>
        </header>
        <div className='App-container'>
          <ChatWindow
            id={'chat1'}
            messages={this.state.messages}
            onSubmit={this.sendChat}
            title={'TestChat'}
          />
          <ChatWindow
            id={'chatTwo'}
            messages={this.state.messages}
            onSubmit={this.sendChat}
            title={'Other Chat'}
          />
        </div>
      </div>
    );
  }

  sendChat = (id, msg, opts={}) => {
    // console.log('sendChat', id, msg, opts)
    let newMsg = {text: msg, sender: 'lazy9669', time: '234'}
    this.setState({messages: [...this.state.messages, newMsg]})
  }
}

export default App;
