import React from 'react';
// import Fade from 'react-reveal/Fade';

const Todolist = (props) => {
  return (
    // <Fade>
    <div className={`todolist ${props.checkStyle}`} id={props.id}>
      <div
        onClick={() => props.checkClick(props.id)}
        className={`todolist__content ${props.checkStyle}`}
      >
        {props.value}
      </div>
      {!props.checked && (
        <div className="todolist__buttons">
          <i
            className="fas fa-trash"
            onClick={() => props.onDelete(props.id)}
          ></i>
          <i className="fas fa-pen" onClick={() => props.onEdit(props.id)}></i>
        </div>
      )}
    </div>
    // </Fade>
  );
};

export default Todolist;
