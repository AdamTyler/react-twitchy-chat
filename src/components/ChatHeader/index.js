import React, { Component } from 'react'
import { MdSettings, MdClose } from 'react-icons/lib/md'
import './styles.css'

export default class ChatHeader extends Component {

  render () {
    const { title } = this.props
    return (
      <div className='tc-title-header tc-flex tc-full-width tc-align-center'>
        <div className='tc-flex tc-title-text'>
          <span>{title}</span>
        </div>
        <div className='tc-flex tc-title-btns'>
          <button className='tc-title-btns-settings tc-btn-icon'>
            <MdSettings size={'1.6rem'} />
          </button>
          <button className='tc-title-btns-close tc-btn-icon' onClick={() => this.onClose()}>
            <MdClose size={'1.6rem'} />
          </button>
        </div>
      </div>
    )
  }

  onClose = () => {
    if (this.props.onClose instanceof Function) {
      this.props.onClose()
    }
  }
}

ChatHeader.defaultProps = {
  title: 'Twitchy Chat'
}
