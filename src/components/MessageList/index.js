import React, { Component } from 'react'
import ChatLine from '../ChatLine'

import './styles.css'

export default class MessageList extends Component {
  render () {
    return (
      <div className='tc-msg-list__container'>
        <div className='msg-list'>
          {this.props.messages.map((msg, i) => <ChatLine key={i} {...msg} />)}
        </div>
      </div>
    )
  }
}

MessageList.defaultProps = {
  maxMessages: 200
}
