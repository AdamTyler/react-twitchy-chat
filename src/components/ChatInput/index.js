import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './styles.css'

export default class ChatInput extends Component {
  state = {
    value: this.props.defaultValue
  }

  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string
  }

  static defaultProps = {
    className: '',
    defaultValue: '',
    disabled: false,
    maxLength: null,
    onChange: null,
    onKeyDown: null,
    onSubmit: null,
    placeholder: 'Type a Message...'
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
      if (this.state.value === '') {
        return
      }
      onSubmit(this.state.value)
      this.setState({value: ''})
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
}
