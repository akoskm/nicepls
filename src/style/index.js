const colBase = {
  width: '70%',
  display: 'block',
  margin: '0 auto',
  position: 'relative'
};
const style = {
  body: {
    fontFamily: 'Arial',
    fontSize: '18px',
    color: '#4c3c3c'
  },
  col: Object.assign({
    backgroundColor: '#1d1f21'
  }, colBase),
  colReport: Object.assign({
    // backgroundColor: 'white'
  }, colBase),
  colReportTitle: {
    marginTop: '20px'
  },
  textarea: {
    width: '100%',
    height: '200px',
    zIndex: 1,
    position: 'relative',
    backgroundColor: 'transparent',
    color: 'white',
    border: 'none',
    padding: '5px',
    fontSize: '18px',
    fontFamily: 'Arial',
    resize: 'none'
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
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  highlightInner: {
    boxSizing: 'border-box',
    width: '100%',
    height: '100%',
    overflow: 'scroll',
    padding: '5px'
  }
};

export default style;