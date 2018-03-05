import React, { Component } from 'react';
import ChatsBox from './components/ChatsBox'
import ChatList from './components/ChatList'
import ChatWindow from './components/ChatWindow'
import logo from './at.svg'
import './App.css'

class App extends Component {

  // faking a lot of data and logic without a proper backend to tie this to for demo purposes
  state = {
    chats: [
      {
        id: 1,
        avatar: 'https://pm1.narvii.com/6046/a8c81433f8321b231b72558f13500e0d0d2dd8f4_128.jpg',
        title: 'Arya Stark',
        subtitle: 'something here',
        lastUpdate: Date.now(),
        unread: 3,
        messages: [
          { text: 'Winter is coming!', sender: 'Arya Stark', time: '123'},
          { text: 'dont care', sender: 'Cersei', time: '123345'}
        ]
      },
      {
        id: 2,
        avatar: 'https://www.e-cigarette-forum.com/data/avatars/m/140/140602.jpg?1429716297',
        title: 'Inigo Montoya',
        subtitle: 'something here',
        lastUpdate: Date.now() - 300000,
        unread: 0,
        messages: [
          { text: 'hi', sender: 'lazy9669', time: '123'},
          { text: 'hello', sender: 'thedude', time: '123345'}
        ]
      }
    ],
    chatIdsOpen: []
  }

  onChatListClick = (chat, e) => {
    console.log('chatListClick', chat, e)
    // set unread to zero on an opened chat
    let newChats = this.state.chats.map(item => {
      if (item.id === chat.id) {
        item.unread = 0
      }
      return item
    })
    this.setState({ chats: newChats, chatIdsOpen: [...new Set([chat.id, ...this.state.chatIdsOpen])] })
  }

  onClose = (chat, e) => {
    console.log('close', chat, e)
    this.setState({ chatIdsOpen: this.state.chatIdsOpen.filter(id => id !== chat.id) })
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

  sendChat = (chat, msg, opts={}) => {
    console.log('sendChat', chat, msg, opts)
    const newMsg = {text: msg, sender: 'lazy9669', time: Date.now()}
    let newChats = this.state.chats.map(item => {
      if (item.id === chat.id) {
        item.messages = [...item.messages, newMsg]
        item.lastUpdate = Date.now()
      }
      return item
    })
    this.setState({ chats: newChats })
  }

  getChats = () => {
    return this.state.chats.map((selected, i) => {
      if (this.state.chatIdsOpen.indexOf(selected.id) !== -1) {
        return (
          <ChatWindow
            key={i}
            maxMessages={20}
            onClose={this.onClose}
            onSubmit={this.sendChat}
            showSettings={false}
            onTitleClick={this.onTitleClick}
            {...selected}
          />
        )
      }
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
