import React, { Component } from 'react';
import axios from 'axios';

export class WelcomeForm extends Component {
  state = {
    username: '',
    email: '',
    message: ''
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log('Submitting form');
    this.setState({
      username: '',
      email: '',
      message: ''
    });
    axios({
      method: 'POST',
      url: '/send',
      data: {
        username: this.state.username,
        email: this.state.email,
        message: this.state.message
      }
    }).then(response => {
      if (response.data.msg === 'success') {
        console.log('Message sent.');
      } else if (response.data.msg === 'fail') {
        console.log('Message failed');
      }
    });
  };

  render() {
    return (
      <div>
        <div>
          <h1>Treezy Web Design</h1>
          <h4>Get in touch and let's build something beautiful together.</h4>
        </div>

        <form onSubmit={this.onSubmit} method='POST'>
          <input
            type='text'
            name='username'
            placeholder='Enter your full name here . . .'
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          <br />
          <input
            type='email'
            name='email'
            placeholder='Enter your email here'
            value={this.state.email}
            onChange={this.onChange}
          />
          <br />
          <br />
          <textarea
            name='message'
            placeholder='Enter your message here . . .'
            value={this.state.message}
            onChange={this.onChange}
          ></textarea>
          <br />
          <br />
          <input type='submit' value='SUBMIT' />
        </form>
      </div>
    );
  }
}

export default WelcomeForm;
