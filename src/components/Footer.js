import React from 'react';

const footer = {
  position: 'relative',
  textAlign: 'center'
};

const style = {
  footerContainer: {
    right: 0,
    bottom: 0,
    left: 0,
    padding: '15px',
    backgroundColor: 'seashell',
    textAlign: 'center'
  },
  footer1: Object.assign({
    fontSize:  '14px'
  }, footer),
  footer2: Object.assign({
    fontSize:  '13px'
  }, footer),
  link: {
    textDecoration: 'underline',
    color: 'inherit'
  }
}

const Footer = () => 
  <div style={style.footerContainer}>
    <div style={style.footer1}>
      Crafted by <a href='http://akoskm.com'>@akoskm</a>.
    </div>
    <div style={style.footer2}>
      Code available on <a href='https://github.com/akoskm/nicepls'>GitHub</a>.
    </div>
  </div>

export default Footer;