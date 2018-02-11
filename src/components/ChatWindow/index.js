import React, { Component } from 'react'
import MessageList from '../MessageList'
import ChatInput from '../ChatInput'

import './styles.css'

export default class ChatWindow extends Component {
  render() {
    const { id, messages, onSubmit, title } = this.props
    return (
      <div className='tc-chat-window tc-flex tc-align-center'>
        <div className='tc-chat-title tc-flex tc-full-width tc-align-center'>
          <div className='tc-title-header tc-flex tc-full-width tc-align-center'>
            <div className='tc-flex tc-title-text'>
              <span>{title}</span>
            </div>
            <div className='tc-flex tc-title-btns'>
              <button className='tc-title-btns-settings tc-btn-icon'>
                <i className="material-icons">settings</i>
              </button>
              <button className='tc-title-btns-close tc-btn-icon'>
                <i className="material-icons">close</i>
              </button>
            </div>
          </div>
        </div>
        <div className='tc-chat-messages tc-full-width'>
          <MessageList
            maxMessages={10}
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
