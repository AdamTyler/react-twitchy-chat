import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ChatListHeader from '../ChatListHeader'
import ChatListItem from '../ChatListItem'

import './styles.css'

export default class ChatList extends Component {

  static propTypes = {
    chats: PropTypes.array,
    className: PropTypes.string,
    onClose: PropTypes.func,
    onMinimize: PropTypes.func,
    onSettings: PropTypes.func,
    onTitleClick: PropTypes.func,
    showClose: PropTypes.bool,
    showMinimize: PropTypes.bool,
    showSettings: PropTypes.bool,
    title: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    chats: [],
    className: '',
    onClick: null,
    onClose: null,
    onMinimize: null,
    onSettings: null,
    onTitleClick: null,
    showClose: false,
    showMinimize: true,
    showSettings: true,
  }

  onClick = (chat, e) => {
    if (this.props.onClick instanceof Function) {
      this.props.onClick(chat, e)
    }
  }

  onCloseChatListItem = (id, e) => {
    if (this.props.onCloseChatListItem instanceof Function) {
      this.props.onCloseChatListItem(id, e)
    }
  }

  render () {
    const { chats, className, onClose, onMinimize, onSettings } = this.props
    return (
      <div className={classNames('tc-chatlist tc-flex tc-align-center', className)}>
        <div className='tc-chatlist-title tc-flex tc-full-width tc-align-center'>
          <ChatListHeader
            onClose={onClose}
            onMinimize={onMinimize}
            onSettings={onSettings}
            title={'Your Chats'}
            />
        </div>
        <div className='tc-chatlist__container tc-full-width'>
          {chats.map((chat, i) => (
            <ChatListItem
              key={i}
              {...chat}
              onClick={(e) => this.onClick(chat, e)}
              onClose={this.onCloseChatListItem}
            />)
          )}
        </div>
      </div>
    )
  }
}
