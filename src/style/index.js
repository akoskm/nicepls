const colBase = {
  width: '100%',
  display: 'block',
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
    margin: '0px 25px -63px'
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
    transition: '100ms background-color',
    color: 'white',
    border: 'none',
    margin: '5px 0px 3px 0px',
    fontSize: '18px',
    fontFamily: 'Arial',
    resize: 'none',
    outline: 'none',
    overflow: 'auto'
  },
  highlight: {
    position: 'absolute',
    left: '2px',
    right: '5px',
    top: '7px',
    bottom: '5px',
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
    overflow: 'hidden',
    lineHeight: 1.2,
  }
};

export default style;