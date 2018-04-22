import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux'
import { setDuration } from '../actions'

const DurationChanger = ({durations, setDuration }) => (
  <Row>
    <Col>
      Pomodoro length
      <input
        type="number"
        value={durations.pomodoro}
        onChange={e => setDuration('pomodoro', Number(e.target.value))}
      />
    </Col>
    <Col >
      Short break length
      <input
        type="number"
        value={durations.shortBreak}
        onChange={e => setDuration('shortBreak', Number(e.target.value))}
      />
    </Col>
    <Col>
      Long break length
      <input
        type="number"
        value={durations.longBreak}
        onChange={e => setDuration('longBreak', Number(e.target.value))}
      />
    </Col>
  </Row>
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
