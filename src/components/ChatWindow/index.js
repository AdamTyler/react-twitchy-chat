import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MessageList from '../MessageList'
import ChatHeader from '../ChatHeader'
import ChatInput from '../ChatInput'

import './styles.css'

export default class ChatWindow extends Component {

  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
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
    id: 1,
    messages: [],
    onClose: null,
    onSettings: null,
    onSubmit: null,
    onTitleClick: null,
    showClose: true,
    showSettings: true,
    title: 'Twitchy Chat',
  }

  onClose = (id, e) => {
    if (this.props.onClose instanceof Function) {
      this.props.onClose(id, e)
    }
  }

  onSettings = (id, e) => {
    if (this.props.onSettings instanceof Function) {
      this.props.onSettings(id, e)
    }
  }

  onTitleClick = (id, e) => {
    if (this.props.onTitleClick instanceof Function) {
      this.props.onTitleClick(id, e)
    }
  }

  render() {
    const { id, messages, onSubmit, showClose, showSettings, title } = this.props
    return (
      <div className='tc-chat-window tc-flex tc-align-center'>
        <div className='tc-chat-title tc-flex tc-full-width tc-align-center'>
          <ChatHeader
            onClose={(e) => this.onClose(id, e)}
            onSettings={(e) => this.onSettings(id, e)}
            onTitleClick={(e) => this.onTitleClick(id, e)}
            showClose={showClose}
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
