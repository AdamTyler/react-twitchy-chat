import React, { Component } from 'react'
import ChatLine from '../ChatLine'

import './styles.css'

export default class MsgList extends Component {
  render () {
    return (
      <div className='msg-list'>
        {this.props.messages.map(msg => <ChatLine key={msg.id} {...msg} />)}
      </div>
    )
  }
}
