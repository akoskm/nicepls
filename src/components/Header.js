import React from 'react';
import style from '../style';

const Header = (props) =>
  <div style={style.colDefault}>
    <div style={style.header}>
      nicepls
    </div>
    <div style={style.intro}>
      <p>nicepls uses <a href='https://github.com/wooorm/alex'>alexjs</a> to detect insensitive, inconsiderate words and explain the errors and suggest possible alternatives.</p>
      <p>It mimics the original alexjs <a href='http://alexjs.com/#demo'>online demo</a>,
      read the motivation <a href='https://github.com/akoskm/nicepls#motivation'>here</a>.</p>
    </div>
  </div>

export default Header;