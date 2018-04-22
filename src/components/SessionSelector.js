import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button } from 'reactstrap';

const SessionSelector = ({ onClick, session }) => (
  <Container>
  <Row>
  <Button
    color={ session === 'pomodoro' ? 'primary':'secondary' }
    onClick={ () => onClick('pomodoro') }>
    pomodoro
  </Button>
  <Button
    color={ session === 'shortBreak' ? 'primary':'secondary' }
    onClick={ () => onClick('shortBreak') }>
    shortBreak
  </Button>
  <Button
    color={ session === 'longBreak' ? 'primary':'secondary' }
    onClick={ () => onClick('longBreak') }>
    longBreak
  </Button>
  </Row>
  </Container>
)

SessionSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  session: PropTypes.string.isRequired,
}

export default SessionSelector
