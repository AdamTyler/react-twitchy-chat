import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MdSettings, MdClose } from 'react-icons/lib/md'
import './styles.css'

export default class ChatHeader extends Component {

  static propTypes = {
    showClose: PropTypes.bool,
    showSettings: PropTypes.bool,
    title: PropTypes.string
  }

  static defaultProps = {
    showClose: true,
    showSettings: true,
    title: 'Twitchy Chat'
  }

  render () {
    const { onClose, onSettings, onTitleClick, showClose, showSettings, title } = this.props
    return (
      <div className='tc-title-header tc-flex tc-full-width tc-align-center'>
        <div className='tc-flex tc-title-text' onClick={onTitleClick}>
          <span>{title}</span>
        </div>
        <div className='tc-flex tc-title-btns'>
          {showSettings &&
            <button className='tc-title-btns-settings tc-btn-icon' onClick={onSettings}>
              <MdSettings size={'1.6rem'} />
            </button>
          }
          {showClose &&
            <button className='tc-title-btns-close tc-btn-icon' onClick={onClose}>
              <MdClose size={'1.6rem'} />
            </button>
          }
        </div>
      </div>
    )
  }
}
