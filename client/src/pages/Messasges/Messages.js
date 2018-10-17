import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from 'axios';
// import nodemailer from "nodemailer";
//const nodemailer = require("nodemailer");

class Messages extends Component {
  state = {
    books: [],
    sender: "",
    email: "",
    subject: "",
    synopsis: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res => this.setState({ books: res.data }))
  //     .catch(err => console.log(err));
  // };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
        console.log("Button clicked!");
        // axios.post('/api/messages', {}).then(console.log).catch(console.log);
        if (this.state.sender && this.state.email) {
          API.postMessage(
          //   {
          //   title: this.state.sender,
          //   author: this.state.email,
          //   subject: this.state.subject,
          //   body: this.state.body
          // }
          )
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Send a Message</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.sender}
                onChange={this.handleInputChange}
                name="sender"
                placeholder="Your name (required)" />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Your email (required)" />
              <Input
                value={this.state.subject}
                onChange={this.handleInputChange}
                name="subject"
                placeholder="Email subject (required)" />
              <TextArea
                value={this.state.body}
                onChange={this.handleInputChange}
                name="body"
                placeholder="Type your message here..." />
              <FormBtn
                // disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Send Message
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Messages;
