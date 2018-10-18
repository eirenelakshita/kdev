import React, { PureComponent } from "react";
import moment from "moment";
import { Container, Row, Col } from "../../components/Grid";

class Calendar extends PureComponent {
  state = {
    moment: ""
  }

  componentDidMount() {
    this.getMonthYear();
  }

  getMonthYear = () => {
    this.setState({ moment: moment().format("MMMM YYYY") })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <span>{this.state.moment}</span>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Calendar;