export const SET_COUNTER = 'SET_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const SET_DURATION = 'SET_DURATION'
export const MANUAL_SWITCH_SESSION = 'MANUAL_SWITCH_SESSION'
export const AUTO_SWITCH_SESSION = 'AUTO_SWITCH_SESSION'
export const RESET_COUNTER = 'RESET_COUNTER'

export function setCounter(value) {
  return {
    type: SET_COUNTER,
    value
  }
}

export function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  }
}

export function resetCounter() {
  return {
    type: RESET_COUNTER,
  }
}

export function manualSwitchSession(name) {
  return {
    type: MANUAL_SWITCH_SESSION,
    name
  }
}

export function setDuration(durationName, value) {
  return {
    type: SET_DURATION,
    payload: {
      durationName,
      value
    }
  }
}

export function autoSwitchSession() {
  return {
    type: AUTO_SWITCH_SESSION,
  }
}
