import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.css'

export default class ChatListItem extends Component {

  static propTypes = {
    avatar: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
    subtitle: PropTypes.string,
    title: PropTypes.string
  }

  static defaultProps = {
    avatar: '',
    className: '',
    onClick: null,
    onClose: null,
    subtitle: 'chat subtitle...',
    title: 'Chat Title'
  }

  render () {
    const { avatar, className, onClick, onClose, subtitle, title } = this.props
    return (
      <div className={classNames('tc-chatlist-item__container tc-flex tc-full-width tc-align-center', className)}
        onClick={onClick}
      >
        <div className='tc-chatlist-item__avatar'>
          <div className='tc-avatar'>
            <img className='tc-image' src={avatar} alt='Users Avatar'>
            </img>
          </div>
        </div>
        <div className='tc-chatlist-item__content'>
          <div className='tc-chatlist-item--title'>
            {title}
          </div>
          <div className='tc-chatlist-item--subtitle'>
            {subtitle}
          </div>
        </div>
      </div>
    )
  }
}
