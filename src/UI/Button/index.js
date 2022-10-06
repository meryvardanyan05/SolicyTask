import React from "react";
import "./Button.css";

const Button = ({ onClick, title }) => {
  return (
    <button className='Button' onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
