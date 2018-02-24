import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatLine from '../ChatLine'
import classNames from 'classnames'

import './styles.css'

export default class MessageList extends Component {

  static proptypes = {
    className: PropTypes.string,
    onScroll: PropTypes.func,
    maxMessages: PropTypes.number,
    messages: PropTypes.array,
  }

  static defaultProps = {
    className: '',
    onScroll: null,
    maxMessages: 200,
    messages: [],
  }

  getBottom = e => {
    return e.scrollHeight - e.scrollTop - e.offsetHeight;
  }

  onScroll = e => {
    let bottom = this.getBottom(e.target)
    this.setState({scrollBottom: bottom})
    if (this.props.onScroll instanceof Function) {
      this.props.onScroll(e)
    }
  }

  scrollToBottom = () => {
    if (!this.msgs) {
      return
    }
    if (this.state.scrollBottom === 0) {
      this.msgs.scrollTop = this.msgs.scrollHeight
    }
  }

  componentWillReceiveProps () {
    if (!this.msgs) {
      return
    }
    this.setState({ scrollBottom: this.getBottom(this.msgs)}, this.scrollToBottom)
  }

  render () {
    const { className, maxMessages } = this.props
    let { messages } = this.props
    if (messages.length > maxMessages) {
      messages = messages.slice(messages.length - maxMessages, messages.length)
    }
    return (
      <div className={classNames('tc-msg-list__container', className)}>
        <div
          className='msg-list'
          onScroll={this.onScroll}
          ref={div => this.msgs = div}
        >
          {messages.map((msg, i) => <ChatLine key={i} {...msg} />)}
        </div>
      </div>
    )
  }
}
