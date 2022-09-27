import React from 'react';

function Button(props) {
  return (
    <button
      className="px-5 py-3 bg-chcyan text-white rounded-3xl hover:opacity-80"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default Button;
