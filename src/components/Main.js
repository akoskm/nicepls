import React from 'react';
import request from 'superagent';
import highlight from '../utils/highlight';
import style from '../style';
import Issues from './Issues';
import Footer from './Footer';
import Header from './Header';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      query: 'The manager is responsible for his clients.',
      formatted: '',
      messages: [],
      checking: false
    }
  }

  componentDidMount() {
    this.handleSubmit();
  }

  handleInputChange(e) {
    this.setState({
      query: e.target.value,
      checking: true
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
          formatted: formatted,
          checking: false
        });
      }.bind(this));
  }

  render() {
    return <div style={style.body}>
      <div style={style.wrapper}>
        <Header />
        <div id='text-input' style={style.col}>
          <div style={style.highlight}>
            <div style={style.highlightInner}>
              {this.state.formatted}
            </div>
          </div>
          <textarea
            rows='5'
            style={style.textarea}
            onChange={this.handleInputChange}
            value={this.state.query}
            autoFocus
          ></textarea>
        </div>
        <Issues
          messages={this.state.messages}
          checking={this.state.checking}
        />
        <div style={style.push}></div>
      </div>
      <Footer />
    </div>
  }
}

export default Main;
