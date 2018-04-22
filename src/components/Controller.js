import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap';
import PropTypes from 'prop-types'

const Controller = ({ onStart, onPause, onReset }) => (
  <Container>
  <Row>
  <Button color='success' onClick={onStart}> start </Button>
  <Button color='warning' onClick={onPause}> pause </Button>
  <Button color='info' onClick={onReset}> reset </Button>
  </Row>
  </Container>
)

Controller.propTypes = {
  onStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
}

export default Controller
