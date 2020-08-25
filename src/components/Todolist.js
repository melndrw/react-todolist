import React from 'react';

const Todolist = (props) => {
  return (
    <div className="todolist" id={props.key}>
      {props.value} <i className="fas fa-trash"></i>
    </div>
  );
};

export default Todolist;
