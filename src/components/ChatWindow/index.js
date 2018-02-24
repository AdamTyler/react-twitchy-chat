import React, { Component } from 'react'
import MessageList from '../MessageList'
import ChatHeader from '../ChatHeader'
import ChatInput from '../ChatInput'

import './styles.css'

export default class ChatWindow extends Component {
  render() {
    const { id, messages, showSettings, onClose, onSettings, onSubmit, title } = this.props
    return (
      <div className='tc-chat-window tc-flex tc-align-center'>
        <div className='tc-chat-title tc-flex tc-full-width tc-align-center'>
          <ChatHeader
            onClose={() => onClose(id)}
            onSettings={() => onSettings(id)}
            showSettings={showSettings}
            title={title} />
        </div>
        <div className='tc-chat-messages tc-full-width'>
          <MessageList
            maxMessages={100}
            messages={messages}
          />
        </div>
        <div className='tc-chat-input tc-full-width'>
          <ChatInput onSubmit={msg => onSubmit(id, msg)} />
        </div>
      </div>
    )
  }
}

ChatWindow.defaultProps = {
  id: 1,
  messages: [],
  onClose: null,
  onSettings: null,
  onSubmit: null,
  showSettings: true,
  title: 'Twitchy Chat',
}
