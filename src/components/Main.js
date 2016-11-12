import React from 'react';
import request from 'superagent';
import highlight from '../utils/highlight';
import style1 from '../style';
import Issues from './Issues';
import Footer from './Footer';
import Header from './Header';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      query: 'The manager is responsible for his clients.',
      formatted: '',
      messages: [],
      checking: false,
      opacity: 1,
      scrollTop: 0
    };
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
        this.handleScroll();
      }.bind(this));
  }

  handleScroll() {
    this.refs.highlightInner.scrollTop = this.refs.textArea.scrollTop;
  }

  render() {
    const style = style1;
    const div = Object.assign({}, style.highlight, {
      opacity: this.state.opacity,
      height: 'initial !important'
    });
    return <div style={style.body}>
      <div style={style.wrapper}>
        <Header />
        <div id='text-input' style={style.colText}>
          <div style={div}>
            <div ref='highlightInner' style={style.highlightInner}>
              {this.state.formatted}
            </div>
          </div>
          <textarea
            ref='textArea'
            rows='5'
            style={style.textarea}
            onChange={this.handleInputChange}
            value={this.state.query}
            autoFocus
            onScroll={this.handleScroll}
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
