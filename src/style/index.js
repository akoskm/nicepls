const colBase = {
  width: '50%',
  display: 'block',
  margin: '0 auto',
  position: 'relative'
};
const style = {
  body: {
    fontFamily: 'Arial',
    fontSize: '18px'
  },
  col: Object.assign({
    backgroundColor: '#1d1f21'
  }, colBase),
  colReport: Object.assign({
    backgroundColor: 'white'
  }, colBase),
  textarea: {
    width: '100%',
    height: '200px',
    zIndex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    padding: '2px',
    fontSize: '18px',
    fontFamily: 'Arial'
  },
  highlight: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: 'initial !important',
    color: 'transparent',
    overflow: 'hidden',
    transition: '100ms opacity',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  highlightInner: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    padding: '2px'
  }
};

export default style;