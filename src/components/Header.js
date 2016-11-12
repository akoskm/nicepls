import React from 'react';
import style from '../style';

const Header = (props) =>
  <div style={style.colDefault}>
    <div style={style.header}>
      nicepls
    </div>
    <div style={style.intro}>
      nicepls detects insensitive words, explains the errors and suggests possible alternatives.
      It mimics the original alexjs <a href='http://alexjs.com/#demo'>online demo</a>,
      read the motivation <a href='https://github.com/akoskm/nicepls#motivation'>here</a>.
    </div>
  </div>

export default Header;