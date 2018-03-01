import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { MdClose, MdExpandMore, MdSettings } from 'react-icons/lib/md'
import './styles.css'

export default class ChatListHeader extends Component {

  static propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    onMinimize: PropTypes.func,
    onSettings: PropTypes.func,
    onTitleClick: PropTypes.func,
    showClose: PropTypes.bool,
    showMinimize: PropTypes.bool,
    showSettings: PropTypes.bool,
    title: PropTypes.string
  }

  static defaultProps = {
    className: '',
    onClose: null,
    onMinimize: null,
    onSettings: null,
    onTitleClick: null,
    showClose: false,
    showMinimize: true,
    showSettings: true,
    title: 'Twitchy Chat'
  }

  render () {
    const { className, onClose, onSettings, onMinimize, onTitleClick, showClose, showMinimize, showSettings, title } = this.props
    return (
      <div className={classNames('tc-title-header tc-flex tc-full-width tc-align-center', className)}>
        <div className='tc-flex tc-title-text' onClick={onTitleClick}>
          <span>{title}</span>
        </div>
        <div className='tc-flex tc-title-btns'>
          {showSettings &&
            <button className='tc-title-btns-close tc-btn-icon' onClick={onSettings}>
              <MdSettings size={'1.6rem'} />
            </button>
          }
          {showMinimize &&
            <button className='tc-title-btns-settings tc-btn-icon' onClick={onMinimize}>
              <MdExpandMore size={'1.6rem'} />
            </button>
          }
          {showClose &&
            <button className='tc-title-btns-settings tc-btn-icon' onClick={onClose}>
              <MdClose size={'1.6rem'} />
            </button>
          }
        </div>
      </div>
    )
  }
}
