import React from 'react'
import PropTypes from 'prop-types'

const getTimeString = time => {
    const minutes = "0" + Math.floor(time / 60)
    const seconds = "0" + (time - 60 * minutes)
    return minutes.substr(-2) + ":" + seconds.substr(-2);
}

const TimeDisplay = ({ time, session, currentNumShort, numShortToLong }) => (
  <div>
    <h2>
    { getTimeString(time) }
    </h2>
    <h3>
    { session }
    <br/>
    {currentNumShort}/{numShortToLong} short breaks
    </h3>
  </div>
)

TimeDisplay.propTypes = {
  time: PropTypes.number.isRequired,
  session: PropTypes.string.isRequired,
  currentNumShort: PropTypes.number.isRequired,
  numShortToLong: PropTypes.number.isRequired,
}

export default TimeDisplay
