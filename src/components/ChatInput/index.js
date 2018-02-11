import React, { Component } from 'react'
import classNames from 'classnames'

import './styles.css'

export default class ChatInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: this.props.defaultValue
    }
  }
  render () {
    const { className, disabled, maxLength, placeholder } = this.props
    return (
      <div className={classNames('tc-input__container', className)}>
        <input className='tc-input'
          autoCapitalize='off'
          autoCorrect='off'
          disabled={disabled}
          maxLength={maxLength}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          placeholder={placeholder}
          value={this.state.value} />
      </div>
    )
  }

  onChange = e => {
    const { onChange, maxLength } = this.props
    if (maxLength && (e.target.value || '').length > maxLength) {
      return
    }
    this.setState({ value: e.target.value })
    if (onChange instanceof Function) {
      onChange(e)
    }
  }

  onKeyDown = e => {
    const { onKeyDown, onSubmit } = this.props
    if (onKeyDown instanceof Function) {
      onKeyDown(e)
    }
    if (e.which === 13) {
      onSubmit(this.state.value)
      this.setState({value: ''})
    }
  }
}

ChatInput.defaultProps = {
  className: '',
  defaultValue: '',
  disabled: false,
  maxLength: null,
  onChange: null,
  onKeyDown: null,
  onSubmit: null,
  placeholder: 'Type a Message...'
}
