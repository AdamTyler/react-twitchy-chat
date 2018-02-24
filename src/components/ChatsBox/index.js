import React, { Component } from 'react'

import { MdInsertComment } from 'react-icons/lib/md'

import './styles.css'

export default class ChatsBox extends Component {

  render () {
    const { icon } = this.props
    return (
      <div className='chats-dialogs-box__container'>
        <div className='chats-dialogs-box__open-close'>
          <div className='chats-btn'>
            <span className='chats-btn-icon'>
              {icon || <MdInsertComment size={'1.6rem'} />}
            </span>
          </div>
        </div>
      </div>
    )
  }

}
