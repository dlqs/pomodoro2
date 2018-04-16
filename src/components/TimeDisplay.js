import React from 'react'
import PropTypes from 'prop-types'

const getTimeString = time => {
    const minutes = "0" + Math.floor(time / 60)
    const seconds = "0" + (time - 60 * minutes)
    return minutes.substr(-2) + ":" + seconds.substr(-2);
}

const TimeDisplay = ({ time }) => (
  <div>
    { getTimeString(time) }
  </div>
)

TimeDisplay.propTypes = {
  time: PropTypes.number.isRequired
}

export default TimeDisplay
