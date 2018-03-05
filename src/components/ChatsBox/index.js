import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { MdInsertComment } from 'react-icons/lib/md'

import './styles.css'

export default class ChatsBox extends Component {

  static propTypes = {
    className: PropTypes.string,
    icon: PropTypes.object,
    unreads: PropTypes.number
  }

  static defaultProps = {
    className: '',
    icon: <MdInsertComment size={'1.6rem'} />,
    unread: 0
  }

  onClick = e => {
    if (this.props.onClick instanceof Function) {
      this.props.onClick(e)
    }
  }

  render () {
    const { className, icon, unread } = this.props
    return (
      <div className={classNames('tc-dialogs-box__container', className)} onClick={this.onClick}>
        <div className='tc-dialogs-box__open-close'>
          <div className='tc-btn'>
            <span className='tc-btn-icon'>
              {icon}
            </span>
          </div>
          <div className='tc-dialogs-box__unreads'>
            {unread}
          </div>
        </div>
      </div>
    )
  }

}
