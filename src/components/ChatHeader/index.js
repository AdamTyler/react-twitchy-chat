import React, { Component } from 'react'
import { MdSettings, MdClose } from 'react-icons/lib/md'
import './styles.css'

export default class ChatHeader extends Component {

  render () {
    const { showSettings, title } = this.props
    return (
      <div className='tc-title-header tc-flex tc-full-width tc-align-center'>
        <div className='tc-flex tc-title-text'>
          <span>{title}</span>
        </div>
        <div className='tc-flex tc-title-btns'>
          {showSettings &&
            <button className='tc-title-btns-settings tc-btn-icon' onClick={() => this.onSettings()}>
              <MdSettings size={'1.6rem'} />
            </button>
          }
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

  onSettings = () => {
    if (this.props.onSettings instanceof Function) {
      this.props.onSettings()
    }
  }
}

ChatHeader.defaultProps = {
  title: 'Twitchy Chat'
}
