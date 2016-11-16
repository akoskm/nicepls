import React from 'react';
import style from '../style';

const Issues = ({ messages, checking }) => {

  var title;
  if (!!checking) {
    title = 'Checking...';
  } else {
    if (messages.length < 1) {
      title = 'No issues.';
    } else {
      title = 'Issues:';
    }
  }

  return <div id='summary' style={style.colDefault}>
    <div style={style.colReportTitle}>{title}</div>
    <ul>
      {messages.map(function (m, i) {
        return <li key={i}>{m.message}</li>;
      })}
    </ul>
  </div>
}

export default Issues;