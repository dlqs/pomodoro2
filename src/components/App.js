import React from 'react'
import PropTypes from 'prop-types'
import SessionSelector from './SessionSelector'
import { connect } from 'react-redux'
import { decrementCounter, autoSwitchSession, manualSwitchSession, setDuration} from '../actions'

class App extends React.Component {
  componentDidMount() {
    this.counting = setInterval(
      () => this.tick(), 1000
    )
  }
  tick() {
    if (this.props.count > 0) {
      this.props.decrementCounter()
    } else {
      this.props.switchSession()
    }
  }
  render() {
    return (
      <div>
        { this.props.count }
        <br/>
        { this.props.currentSession }
        <br/>
        { this.props.currentNumShort }
        <br/>
        <button onClick={ this.props.switchSession }> autoswitch </button>
        <button onClick={ this.props.changeShort }> change to short </button>
        <button onClick={ this.props.changeLong }> change to long </button>
        <button onClick={ () => this.props.setDuration('longBreak', 300) }> change len</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    count: state.count,
    currentSession: state.session.currentSession,
    currentNumShort: state.session.currentNumShort,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    decrementCounter: () => dispatch(decrementCounter()),
    switchSession: () => dispatch(autoSwitchSession()),
    changeShort: () => dispatch(manualSwitchSession('shortBreak')),
    changeLong: () => dispatch(manualSwitchSession('longBreak')),
    setDuration: (duration, value) => dispatch(setDuration(duration, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
