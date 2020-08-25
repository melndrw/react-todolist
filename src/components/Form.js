import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type={props.type}
          onChange={props.onChange}
          placeholder={props.placeholder}
          value={props.value}
        />
      </form>
    </div>
  );
};

export default Form;
