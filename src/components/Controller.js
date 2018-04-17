import React from 'react'
import PropTypes from 'prop-types'

const Controller = ({ onStart, onPause, onReset }) => (
  <div>
  <button onClick={onStart}> start </button>
  <button onClick={onPause}> pause </button>
  <button onClick={onReset}> reset </button>
  </div>
)

Controller.propTypes = {
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default Controller
