import React from 'react';
import request from 'superagent';
import highlight from './highlight';
import style from '../style';
import Issues from './issues';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      query: '',
      formatted: '',
      messages: []
    }
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value
    });
    let timeoutId = window.setTimeout(this.handleSubmit.bind(this), 300);
    if (this.oldTimeoutId) {
      window.clearTimeout(this.oldTimeoutId);
    }
    this.oldTimeoutId = timeoutId;
  }

  handleSubmit() {
    const query = this.state.query.toString();
    request
      .post('/api/correct')
      .send({ query: query })
      .set('Accept', 'application/json')
      .end(function (err, res) {
        var messages = res.body.map(function (r) {
          return r.message;
        });
        const formatted = highlight(query, res);
        this.setState({
          messages: messages,
          formatted: formatted
        });
      }.bind(this));
  }

  render() {
    console.log(Issues);
    return <div style={style.body}>
      <div id='text-input' style={style.col}>
        <div style={style.highlight}>
          <div style={style.highlightInner} dangerouslySetInnerHTML={{ __html: this.state.formatted }}>
          </div>
        </div>
        <textarea rows='5' style={style.textarea} onChange={this.handleInputChange} value={this.state.query}></textarea>
      </div>
      <Issues messages={this.state.messages} />
    </div>
  }
}

export default Main;
