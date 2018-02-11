import React, { Component } from 'react'
import ChatLine from '../ChatLine'
import classNames from 'classnames'

import './styles.css'

export default class MessageList extends Component {
  render () {
    const { className, messages } = this.props
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

  componentWillReceiveProps () {
    if (!this.msgs) {
      return
    }
    this.setState({ scrollBottom: this.getBottom(this.msgs)}, this.scrollToBottom)
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

}

MessageList.defaultProps = {
  className: '',
  onScroll: null,
  maxMessages: 200,
  messages: [],
}
