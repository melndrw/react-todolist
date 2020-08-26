import React from 'react';
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <Fade left cascade>
      <header className="mainpage__header">
        <a href="#!">React Todo List</a>
      </header>
    </Fade>
  );
};

export default Header;
