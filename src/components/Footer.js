import React from 'react';

const footer = {
  position: 'relative',
  textAlign: 'center'
};

const style = {
  footerContainer: {
    position: 'absolute',
    bottom: '5px',
    width: '100%'
  },
  footer1: Object.assign({
    fontSize:  '15px'
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
      Footer text
    </div>
    <div style={style.footer2}>
      More footer text
    </div>
  </div>

export default Footer;