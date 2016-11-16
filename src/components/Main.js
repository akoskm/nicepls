import alex from 'alex';
import React from 'react';
import request from 'superagent';

import style from '../style';
import Issues from './Issues';
import Footer from './Footer';
import Header from './Header';
import Highlight from './Highlight';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.handleScroll = this.handleScroll.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      query: 'The manager is responsible for his clients.',
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
    const messages = alex(query).messages;
    this.setState({
      checking: false,
      messages: messages.map((m) => {
        return {
          start: m.location.start.offset,
          end: m.location.end.offset,
          message: m.message
        };
      })
    });
    this.handleScroll();
  }

  handleScroll() {
    this.refs.highlightInner.scrollTop = this.refs.textArea.scrollTop;
  }

  render() {
    const div = Object.assign({}, style.highlight, {
      opacity: this.state.opacity,
      height: 'initial !important'
    });
    const query = this.state.query;
    const messages = this.state.messages;
    const checking = this.state.checking;
    return <div style={style.body}>
      <div style={style.wrapper}>
        <Header />
        <div id='text-input' style={style.colText}>
          <div style={div}>
            <div ref='highlightInner' style={style.highlightInner}>
              <Highlight {...{query, messages}} />
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
        <Issues {...{messages, checking}} />
        <div style={style.push}></div>
      </div>
      <Footer />
    </div>
  }
}

export default Main;
