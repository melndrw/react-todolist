import React from 'react';

const Todolist = (props) => {
  return (
    <div
      className={`todolist ${props.checkStyle}`}
      id={props.id}
      onClick={() => props.checkClick(props.id)}
    >
      {props.value}{' '}
      <span>
        <i
          className="fas fa-trash"
          onClick={() => props.onDelete(props.id)}
        ></i>
        <i className="fas fa-pen" onClick={() => props.onEdit(props.id)}></i>
      </span>
    </div>
  );
};

export default Todolist;
