import { SET_COUNTER, DECREMENT_COUNTER, SET_DURATION, MANUAL_SWITCH_SESSION, AUTO_SWITCH_SESSION } from './actions'
import initialDurations from './constants'
import { combineReducers } from 'redux'

const initialSession = {
  numShortToLong: 4,
  currentNumShort: 0,
  currentSession: 'pomodoro'
}

function counter(count=initialDurations.pomodoro, action) {
  switch(action.type) {
    case 'SET_COUNTER':
      return action.value
    case 'DECREMENT_COUNTER':
      return count - 1
    default:
      return count
  }
}

function setSession(session=initialSession, action) {
  switch(action.type) {
    default:
      return session
  }
}

function manualSwitchSession(session=initialSession, action) {
  switch(action.type) {
    case 'MANUAL_SWITCH_SESSION':
      if (session === action.name) {
        // do not do anything on same session
        return session
      } else {
        if (action.name === 'shortBreak') {
          // change to break
          return {
            ...session,
            currentNumShort: session.currentNumShort + 1,
            currentSession: 'shortBreak'
          }
        } else if (action.name === 'longBreak') {
          return {
            ...session,
            currentNumShort: 0,
            currentSession: 'longBreak'
          }
        } else if (action.name === 'pomodoro') {
          return {
          ...session,
          currentSession: 'pomodoro'
        }
      }
    }
    break
    default:
      return initialSession
  }
}

function setDurations(durations=initialDurations, action) {
  switch(action.type) {
    case 'SET_DURATION':
      return {
        ...durations,
        [action.payload.durationName]:action.payload.value
      }
    default:
      return durations
  }
}

function autoSwitchSession(state, action) {
  switch(action.type) {
    case 'AUTO_SWITCH_SESSION':
      if (state.session.currentSession === 'pomodoro') {
        if (state.session.currentNumShort >= state.session.numShortToLong) {
          // activate long break
          return {
            ...state,
            count: state.durations.longBreak,
            session: {
              ...state.session,
              currentNumShort: 0,
              currentSession: 'longBreak'
            }
          }
        } else {
          // activate short break, plus one to currNumShort breaks
          return {
            ...state,
            count: state.durations.shortBreak,
            session: {
              ...state.session,
              currentNumShort: state.session.currentNumShort + 1,
              currentSession: 'shortBreak'
            }
          }
        }
      } else {
        // coming back from break
        return {
          ...state,
          count: state.durations.pomodoro,
          session: {
            ...state.session,
            currentSession: 'pomodoro'
          }
        }
      }
      break
    default:
      return state
  }
}

const combinedReducer = combineReducers({
  count: counter,
  session: setSession,
  durations: setDurations
})

function crossSliceReducer(state, action) {
  switch(action.type) {
    case 'AUTO_SWITCH_SESSION':
      return autoSwitchSession(state, action)
    case 'MANUAL_SWITCH_SESSION':
      return {
        ...state,
        count: counter(state.count, {type:'SET_COUNTER',
                                     value: state.durations[action.name]}),
        session: manualSwitchSession(state.session, action)
      }
    default:
      return state
  }
}

function counterApp(state, action) {
  const intermediateState = combinedReducer(state, action)
  const finalState = crossSliceReducer(intermediateState, action)
  return finalState
}

export default counterApp
