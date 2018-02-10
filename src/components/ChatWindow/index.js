import React, { Component } from 'react'
import MsgList from '../MsgList'

import './styles.css'

const msgs = [
  { id: 1, text: 'hi', sender: 'lazy9669', time: '123'},
  { id: 2, text: 'hello', sender: 'dude1', time: '123345'}
]

export default class ChatWindow extends Component {
  render() {
    const { title } = this.props
    return (
      <div className='tc-chat-window tc-flex tc-align-center'>
        <div className='tc-chat-title tc-flex tc-full-width tc-align-center'>
          <div className='tc-title-header tc-flex tc-full-width tc-align-center'>
            <div className='tc-flex tc-title-text'>
              <span>{title}</span>
            </div>
            <div className='tc-flex tc-title-btns'>
              <button className='tc-title-btns-settings tc-btn-icon'>
                <i class="material-icons">settings</i>
              </button>
              <button className='tc-title-btns-close tc-btn-icon'>
                <i class="material-icons">close</i>
              </button>
            </div>
          </div>
        </div>
        <div className='tc-chat-content tc-full-width'>
          <div className='tc-chat-content__conatiner'>
            <MsgList messages={msgs} fuck={'jfjfj'}/>
          </div>
        </div>
        <div className='tc-chat-input tc-full-width'>
          <div className='tc-chat-input__container'>
            <input className='tc-input' autoCapitalize='off' autoCorrect='off' />
          </div>
        </div>
      </div>
    )
  }
}
