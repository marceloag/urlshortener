import React from 'react';
import Button from './Button';

function Link(props) {
  async function copyClipboard(link) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(link);
    } else {
      return document.execCommand('copy', true, link);
    }
  }
  return (
    <div className="flex flex-row mx-20 p-5 bg-white justify-between items-center rounded-lg my-5">
      {props.original}
      <div className="flex flex-row items-center gap-6">
        <a href={props.short} className=" text-chcyan">
          {props.short}
        </a>
        <Button title="Copy" onClick={() => copyClipboard(props.short)} />
      </div>
    </div>
  );
}

export default Link;
