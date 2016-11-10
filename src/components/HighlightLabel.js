import React from 'react';

const style = {
  backgroundColor: '#ce4037',
  borderRadius: '0.2em',
  display: 'inline-block',
  top: '0',
  position: 'relative',
  lineHeight: 1.2,
  zIndex: 1,
  color: 'white',
  // marginLeft: '-0.9px'
};

const HighlightLabel = ({beginning, word, error, handleOnHover}) => {

  const onHover = function () {
    handleOnHover(error.message);
  }

  return <span>
    {beginning}
    <span style={style} onMouseEnter={onHover}>{word}</span>
  </span>
}

export default HighlightLabel;