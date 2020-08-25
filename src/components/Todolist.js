import React from 'react';

const Todolist = (props) => {
  return (
    <div className="todolist" id={props.id}>
      {props.value}{' '}
      <span>
        <i
          className="fas fa-trash"
          onClick={() => props.onDelete(props.id)}
          name={props.id}
        ></i>
        <i className="fas fa-pen" name={props.id}></i>
      </span>
    </div>
  );
};

export default Todolist;
