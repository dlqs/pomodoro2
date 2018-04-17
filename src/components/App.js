import React from 'react'
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
      <div>
        <SessionSelector onClick={ this.props.manualSwitchSession }/>
        <TimeDisplay time={this.props.count}/>
        { this.props.currentSession }
        <br/>
        { this.props.currentNumShort }/{ this.props.numShortToLong } short breaks
        <Controller
          onStart={this.start}
          onPause={this.pause}
          onReset={this.props.resetCounter}
        />
        <DurationChanger/>
      </div>
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
