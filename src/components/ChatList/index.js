import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import ChatHeader from '../ChatHeader'
import ChatListItem from '../ChatListItem'

import './styles.css'

export default class ChatList extends Component {

  static propTypes = {
    chats: PropTypes.array,
    className: PropTypes.string,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    chats: [],
    className: '',
    onClick: null
  }

  onClick = e => {
    if (this.props.onClick instanceof Function) {
      this.props.onClick(e)
    }
  }

  onClose = (id, e) => {
    if (this.props.onClose instanceof Function) {
      this.props.onClose(id, e)
    }
  }

  render () {
    const { chats, className } = this.props
    return (
      <div className={classNames('tc-chatlist tc-flex tc-align-center', className)}>
        <div className='tc-chatlist-title tc-flex tc-full-width tc-align-center'>
          <ChatHeader title={'Your Chats'} />
        </div>
        <div className='tc-chatlist__container tc-full-width'>
          {chats.map((chat, i) => (
            <ChatListItem
              key={i}
              {...chat}
              onClick={this.onClick}
              onClose={this.onClose}
            />)
          )}
        </div>
      </div>
    )
  }
}
