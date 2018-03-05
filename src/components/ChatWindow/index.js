import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MessageList from '../MessageList'
import ChatHeader from '../ChatHeader'
import ChatInput from '../ChatInput'

import './styles.css'

export default class ChatWindow extends Component {

  static propTypes = {
    avatar: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxMessages: PropTypes.number,
    messages: PropTypes.array,
    onClose: PropTypes.func,
    onSettings: PropTypes.func,
    onSubmit: PropTypes.func,
    onTitleClick: PropTypes.func,
    showClose: PropTypes.bool,
    showSettings: PropTypes.bool,
    title: PropTypes.string,
  }

  static defaultProps = {
    avatar: 'http://via.placeholder.com/70x70',
    id: 1,
    maxMessages: 100,
    messages: [],
    onClose: null,
    onSettings: null,
    onSubmit: null,
    onTitleClick: null,
    showClose: true,
    showSettings: true,
    title: 'Twitchy Chat',
  }

  onClose = e => {
    if (this.props.onClose instanceof Function) {
      this.props.onClose(this.props, e)
    }
  }

  onSettings = e => {
    if (this.props.onSettings instanceof Function) {
      this.props.onSettings(this.props, e)
    }
  }

  onTitleClick = e => {
    if (this.props.onTitleClick instanceof Function) {
      this.props.onTitleClick(this.props, e)
    }
  }

  render() {
    const { avatar, maxMessages, messages, onSubmit, showClose, showSettings, title } = this.props
    return (
      <div className='tc-chat-window tc-flex tc-align-center'>
        <div className='tc-chat-title tc-flex tc-full-width tc-align-center'>
          <ChatHeader
            avatar={avatar}
            onClose={this.onClose}
            onSettings={this.onSettings}
            onTitleClick={this.onTitleClick}
            showClose={showClose}
            showSettings={showSettings}
            title={title} />
        </div>
        <div className='tc-chat-messages tc-full-width'>
          <MessageList
            maxMessages={maxMessages}
            messages={messages}
          />
        </div>
        <div className='tc-chat-input tc-full-width'>
          <ChatInput onSubmit={msg => onSubmit(this.props, msg)} />
        </div>
      </div>
    )
  }
}
