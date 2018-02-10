import React, { Component } from 'react'

import './styles.css'

export default class ChatLine extends Component {
  render() {
    return (
      <div className='chat-line'>
        <span className='sender'>{this.props.sender}</span>
        <span>: </span>
        <span className='message'>{this.props.text}</span>
      </div>
    )
  }
}
