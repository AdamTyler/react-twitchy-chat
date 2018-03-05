import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { MdSettings, MdClose } from 'react-icons/lib/md'
import './styles.css'

export default class ChatHeader extends Component {

  static propTypes = {
    className: PropTypes.string,
    showClose: PropTypes.bool,
    showSettings: PropTypes.bool,
    title: PropTypes.string
  }

  static defaultProps = {
    className: '',
    showClose: true,
    showSettings: true,
    title: 'Twitchy Chat'
  }

  render () {
    const { avatar, className, onClose, onSettings, onTitleClick, showClose, showSettings, title } = this.props
    return (
      <div className={classNames('tc-title-header tc-flex tc-full-width tc-align-center', className)}>
        <div className='tc-flex tc-title tc-align-center' onClick={onTitleClick}>
          <div className='tc-title-avatar'>
            <img className='tc-image' src={avatar} alt='Users Avatar' />
          </div>
          <span className='tc-title-text'>{title}</span>
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
