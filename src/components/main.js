import React from 'react';
import request from 'superagent';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      query: '',
      messages: []
    }
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  handleSubmit(e) {
    request
      .post('/api/correct')
      .send({ query: this.state.query.toString() })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        var messages = res.body.map(function (r) {
          return r.message;
        });
        this.setState({ messages: messages });
      }.bind(this));
  }

  render() {
    return <div>
      <div>
        <textarea onChange={this.handleInputChange} value={this.state.query}></textarea>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
      <ul>
        {this.state.messages.map(function (m, i) {
          return <li key={i}>{m}</li>;
        })}
      </ul>
    </div>
  }
}

export default Main;
