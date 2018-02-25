import React, { Component } from 'react';
import ChatsBox from './components/ChatsBox'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'
import logo from './at.svg'
import './App.css'

class App extends Component {

  state = {
    chats: [
      {id: 1, avatar: 'http://via.placeholder.com/70x70', title: 'This one Chat', subtitle: 'something here', lastUpdate: Date.now()},
      {id: 2, avatar: 'http://via.placeholder.com/70x70', title: 'This other Chat', subtitle: 'something here', lastUpdate: Date.now() - 300000}
    ],
    messages: [
      { text: 'hi', sender: 'lazy9669', time: '123'},
      { text: 'hello', sender: 'thedude', time: '123345'}
    ]
  }

  onChatListClick = (chat, e) => {
    console.log('chatListClick', chat, e)
  }

  onClose = (id, e) => {
    console.log('close', id, e)
  }

  onSettings = (id, e) => {
    console.log('settings', id, e)
  }

  onTitleClick = (id, e) => {
    console.log('title', id, e)
  }

  openChatList = e => {
    console.log('open chat list', e)
  }

  sendChat = (id, msg, opts={}) => {
    // console.log('sendChat', id, msg, opts)
    let newMsg = {text: msg, sender: 'lazy9669', time: '234'}
    this.setState({messages: [...this.state.messages, newMsg]})
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
              onTitleClick={this.onTitleClick}
              title={'TestChat'}
            />
            <ChatWindow
              id={'chatTwo'}
              messages={this.state.messages}
              onClose={this.onClose}
              onSettings={this.onSettings}
              onSubmit={this.sendChat}
              onTitleClick={this.onTitleClick}
              title={'Other Chat'}
            />
          </div>
          <ChatList chats={this.state.chats} onClick={this.onChatListClick} />
          <ChatsBox onClick={this.openChatList} />
        </div>
      </div>
    );
  }
}

export default App
