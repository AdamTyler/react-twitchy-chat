import React, { Component } from 'react'
import propTypes from 'prop-types'
import './styles.css'

export default class ChatLine extends Component {

  static propTypes = {
    sender: propTypes.string,
    text: propTypes.string
  }

  static defaultProps = {
    sender: 'sender',
    text: 'text'
  }

  render() {
    const { sender, text } = this.props
    return (
      <div className='chat-line'>
        <span className='sender'>{sender}</span>
        <span>: </span>
        <span className='message'>{text}</span>
      </div>
    )
  }
}
