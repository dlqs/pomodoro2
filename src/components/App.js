import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import SessionSelector from './SessionSelector'
import TimeDisplay from './TimeDisplay'
import Controller from './Controller'
import DurationChanger from './DurationChanger'
import { connect } from 'react-redux'
import { decrementCounter,
  autoSwitchSession,
  manualSwitchSession,
  resetCounter
} from '../actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.start = this.start.bind(this)
    this.pause = this.pause.bind(this)
  }
  componentDidMount() {
    this.start()
  }
  tick() {
    if (this.props.count > 0) {
      this.props.decrementCounter()
    } else {
      this.props.switchSession()
    }
  }
  start() {
    if (!this.counting) {
      this.counting = setInterval(
        () => this.tick(), 1000
      )
    }
  }
  pause() {
    clearInterval(this.counting)
    this.counting = false
  }
  render() {
    return (
      <Container>
      <Row>
        <SessionSelector
          session={this.props.currentSession}
          onClick={this.props.manualSwitchSession}
        />
      </Row>
      <Row>
        <TimeDisplay
          time={this.props.count}
          session={this.props.currentSession}
          currentNumShort={this.props.currentNumShort}
          numShortToLong={this.props.numShortToLong}
        />
      </Row>
      <Row>
        <Controller
          onStart={this.start}
          onPause={this.pause}
          onReset={this.props.resetCounter}
        />
      </Row>
      <Row>
        <DurationChanger/>
      </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    currentSession: state.session.currentSession,
    currentNumShort: state.session.currentNumShort,
    numShortToLong: state.session.numShortToLong,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrementCounter: () => dispatch(decrementCounter()),
    resetCounter: () => dispatch(resetCounter()),
    switchSession: () => dispatch(autoSwitchSession()),
    manualSwitchSession: name => dispatch(manualSwitchSession(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
