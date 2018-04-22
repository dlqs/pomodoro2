import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col, Button } from 'reactstrap';

const SessionSelector = ({ onClick }) => (
  <Container>
  <Row>
  <Button onClick={ () => onClick('pomodoro') }> pomodoro </Button>
  <Button onClick={ () => onClick('shortBreak') }> shortBreak </Button>
  <Button onClick={ () => onClick('longBreak') }> longBreak </Button>
  </Row>
  </Container>
)

SessionSelector.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SessionSelector
