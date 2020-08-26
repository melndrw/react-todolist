import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { CSSTransition } from 'react-transition-group';
const MainTitle = () => {
  return (
    <div className="mainpage__main--title">
      <Zoom>
        <p>
          todo<span>list</span>
        </p>
      </Zoom>
      <CSSTransition in={true} timeout={1000} classNames="sub-title">
        <p>A simple todolist app built with React Hooks & Context</p>
      </CSSTransition>
    </div>
  );
};

export default MainTitle;
