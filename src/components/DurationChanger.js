import React from 'react'
import { connect } from 'react-redux'
import { setDuration } from '../actions'

const DurationChanger = ({durations, setDuration }) => (
  <div>
    Pomodoro length
    <input
      type="number"
      value={durations.pomodoro}
      onChange={e => setDuration('pomodoro', Number(e.target.value))}
    />
    <br/>
    Short break length
    <input
      type="number"
      value={durations.shortBreak}
      onChange={e => setDuration('shortBreak', Number(e.target.value))}
    />
    <br/>
    Long break length
    <input
      type="number"
      value={durations.longBreak}
      onChange={e => setDuration('longBreak', Number(e.target.value))}
    />
  </div>
)

const mapStateToProps = state => {
  return {
    durations: state.durations,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDuration: (name, value) => dispatch(setDuration(name, value))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DurationChanger)
