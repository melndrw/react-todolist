import React from 'react';
import Zoom from 'react-reveal/Zoom';

const MainTitle = () => {
  return (
    <div className="mainpage__main--title">
      <Zoom>
        <p>
          todo<span>list</span>
        </p>

        <p>A simple todolist app built with React Hooks & Context</p>
      </Zoom>
    </div>
  );
};

export default MainTitle;
