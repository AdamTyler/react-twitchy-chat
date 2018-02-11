import React, { Component } from 'react'

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
            <i className="material-icons">settings</i>
          </button>
          <button className='tc-title-btns-close tc-btn-icon'>
            <i className="material-icons">close</i>
          </button>
        </div>
      </div>
    )
  }
}

ChatHeader.defaultProps = {
  title: 'Twitchy Chat'
}
