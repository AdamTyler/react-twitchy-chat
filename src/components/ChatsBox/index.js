import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MdInsertComment } from 'react-icons/lib/md'

import './styles.css'

export default class ChatsBox extends Component {

  static propTypes = {
    icon: PropTypes.object
  }

  static defaultProps = {
    icon: <MdInsertComment size={'1.6rem'} />
  }

  onClick = e => {
    if (this.props.onClick instanceof Function) {
      this.props.onClick(e)
    }
  }

  render () {
    const { icon } = this.props
    return (
      <div className='chats-dialogs-box__container' onClick={this.onClick}>
        <div className='chats-dialogs-box__open-close'>
          <div className='chats-btn'>
            <span className='chats-btn-icon'>
              {icon}
            </span>
          </div>
        </div>
      </div>
    )
  }

}
