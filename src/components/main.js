import React from 'react';
import request from 'superagent';

const col = {
  width: '50%',
  display: 'inline-block'
};

const style = {
  'col-left': col,
  'col-right': Object.assign({
    float: 'right'
  }, col),
  textarea: {
    width: '100%',
    height: '200px'
  }
};

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
      <div style={style['col-left']}>
        <div>
          <textarea style={style.textarea} onChange={this.handleInputChange} value={this.state.query}></textarea>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
        <ul>
          {this.state.messages.map(function (m, i) {
            return <li key={i}>{m}</li>;
          })}
        </ul>
      </div>
      <div style={style['col-right']}>
        <textarea style={style.textarea} value={this.state.fixed}></textarea>
      </div>
    </div>
  }
}

export default Main;
