import React from 'react';

const Todolist = (props) => {
  return (
    <div className="todolist" id={props.id}>
      {props.value}{' '}
      <span>
        <i className="fas fa-trash">
          <i className="fas fa-pen"></i>
        </i>
      </span>
    </div>
  );
};

export default Todolist;
