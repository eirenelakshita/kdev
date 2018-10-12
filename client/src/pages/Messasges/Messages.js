import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Messages extends Component {
  state = {
    books: []
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Send a Message</h1>
            </Jumbotron>
            <form>
              <Input name="sender" placeholder="Your name (required)" />
              <Input name="email" placeholder="Your email (required)" />
              <Input name="subject" placeholder="Email subject (required)" />
              <TextArea name="body" placeholder="Type your message here..." />
              <FormBtn>Send Message</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Messages;
