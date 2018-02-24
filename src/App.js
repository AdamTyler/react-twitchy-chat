import React, { Component } from 'react';
import ChatWindow from './components/ChatWindow'
import ChatsBox from './components/ChatsBox'
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
          <div className='App-windows'>
            <ChatWindow
              id={'chat1'}
              messages={this.state.messages}
              onClose={this.onClose}
              onSubmit={this.sendChat}
              showSettings={false}
              title={'TestChat'}
            />
            <ChatWindow
              id={'chatTwo'}
              messages={this.state.messages}
              onClose={this.onClose}
              onSettings={this.onSettings}
              onSubmit={this.sendChat}
              title={'Other Chat'}
            />
          </div>
          <ChatsBox />
        </div>
      </div>
    );
  }

  onClose = id => {
    console.log('close', id)
  }

  onSettings = id => {
    console.log('settings', id)
  }

  sendChat = (id, msg, opts={}) => {
    // console.log('sendChat', id, msg, opts)
    let newMsg = {text: msg, sender: 'lazy9669', time: '234'}
    this.setState({messages: [...this.state.messages, newMsg]})
  }
}

export default App;
