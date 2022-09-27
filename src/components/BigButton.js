import React from 'react';

function BigButton(props) {
  return (
    <button
      className="px-5 py-5 w-auto bg-chcyan text-white rounded-2xl"
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}

export default BigButton;
