import React from 'react';
import style from '../style';

const Issues = ({ messages }) => {

  var title;
  if (messages.length < 1) {
    title = 'No issues';
  } else {
    title = 'Issues:';
  }

  return <div id='summary' style={style.colReport}>
    <div style={style.colReportTitle}>{title}</div>
    <ul>
      {messages.map(function (m, i) {
        return <li key={i}>{m}</li>;
      })}
    </ul>
  </div>
}

export default Issues;