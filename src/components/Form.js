import React from 'react';
import Fade from 'react-reveal/Fade';

const Form = (props) => {
  return (
    <Fade>
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
    </Fade>
  );
};

export default Form;
