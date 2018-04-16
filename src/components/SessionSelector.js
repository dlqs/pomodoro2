import React from 'react'
import PropTypes from 'prop-types'

const SessionSelector = ({ onClick }) => (
  <div>
  <button onClick={ () => onClick('pomodoro') }> pomodoro </button>
  <button onClick={ () => onClick('shortBreak') }> shortBreak </button>
  <button onClick={ () => onClick('longBreak') }> longBreak </button>
  </div>
)

SessionSelector.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SessionSelector
