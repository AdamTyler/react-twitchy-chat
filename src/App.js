import React, { Component } from 'react';
import ChatsBox from './components/ChatsBox'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'
import logo from './at.svg'
import './App.css'

class App extends Component {

  state = {
    chats: [
      {id: 1, avatar: 'http://via.placeholder.com/70x70', title: 'Arya Stark',
        subtitle: 'something here', lastUpdate: Date.now(), unread: 3,
        messages: [
          { text: 'Winter is coming!', sender: 'Arya Stark', time: '123'},
          { text: 'dont care', sender: 'Cersei', time: '123345'}
        ]
      },
      {id: 2, avatar: 'http://via.placeholder.com/70x70', title: 'Inigo Montoya',
        subtitle: 'something here', lastUpdate: Date.now() - 300000, unread: 0,
        messages: [
          { text: 'hi', sender: 'lazy9669', time: '123'},
          { text: 'hello', sender: 'thedude', time: '123345'}
        ]
      }
    ],
    chatsOpen: []
  }

  onChatListClick = (chat, e) => {
    console.log('chatListClick', chat, e)
    this.setState({ chatsOpen: [...new Set([chat, ...this.state.chatsOpen])] })
  }

  onClose = (chat, e) => {
    console.log('close', chat, e)
    this.setState({ chatsOpen: this.state.chatsOpen.filter(item => item.id !== chat.id) })
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

  onChatListMinimize = e => {
    console.log('minimize chat list', e)
  }

  onCloseChatListItem = e => {
    console.log('close chat list item', e)
  }

  onChatListSettings = e => {
    console.log('settings chat list', e)
  }

  sendChat = (id, msg, opts={}) => {
    console.log('sendChat', id, msg, opts)
    let newMsg = {text: msg, sender: 'lazy9669', time: '234'}
    this.setState({messages: [...this.state.messages, newMsg]})
  }

  getChats = () => {
    return this.state.chatsOpen.map((selected, i) => {
      // let selected = this.state.chats.find(chat => { console.log('compare chat', chat, id, chat.id === id); return chat.id === id})
      // console.log('selected chat', id, selected)
      return (
          <ChatWindow
          id={selected.id}
          key={i}
          messages={selected.messages}
          onClose={this.onClose}
          onSubmit={this.sendChat}
          showSettings={false}
          onTitleClick={this.onTitleClick}
          title={selected.title}
        />
    )
    })
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
            {this.getChats()}
          </div>
          <ChatList
            chats={this.state.chats}
            onClick={this.onChatListClick}
            onClose={null}
            onMinimize={this.onChatListMinimize}
            onCloseChatListItem={this.onCloseChatListItem}
            onSettings={this.onChatListSettings}
          />
          <ChatsBox onClick={this.openChatList} />
        </div>
      </div>
    );
  }
}

export default App
