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
    color: '#514a54'
  },
  wrapper: {
    minHeight: '100%',
    height: 'auto !important',
    margin: '0 auto -63px'
  },
  header: {
    position: 'relative',
    textAlign: 'center',
    fontSize:  '45px',
    padding: '15px',
    fontWeight: 'bold'
  },
  intro: {
    textAlign: 'center',
    paddingBottom: '20px',
    fontSize: '15px'
  },
  push: {
    height: '63px'
  },
  colText: Object.assign({
    backgroundColor: '#514a54', //#644f6d
    color: 'white'
  }, colBase),
  colDefault: Object.assign({
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
    resize: 'none',
    outline: 'none'
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