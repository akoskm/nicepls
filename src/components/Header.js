import React from 'react';

const style = {
  headerContainer: {
    width: '100%'
  },
  header: {
    position: 'relative',
    textAlign: 'center',
    fontSize:  '25px',
    margin: '15px'
  }
}

const Header = (props) =>
  <div style={style.headerContainer}>
    <div style={style.header}>
      nicepls
    </div>
  </div>

export default Header;