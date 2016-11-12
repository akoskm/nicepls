import React from 'react';

const style = {
  backgroundColor: '#ce4037',
  borderRadius: '0.2em',
  display: 'inline-block',
  top: '0',
  position: 'relative',
  lineHeight: 1.2,
  zIndex: 1,
  color: 'white'
};

const HighlightLabel = ({beginning, word, error}) => {

  let mark;

  if (word) {
    mark = <span style={style}>{word}</span>;
  }

  return <span>
    {beginning}
    {mark}
  </span>;
}

export default HighlightLabel;