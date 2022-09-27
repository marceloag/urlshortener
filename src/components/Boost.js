import React from 'react';
import Button from './Button';

function Boost() {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-chdarkviolet py-10 gap-6 bg-boostbg bg-cover">
      <h1 className="text-white text-5xl font-black">Boost your links today</h1>
      <Button title="Get Started" />
    </div>
  );
}

export default Boost;
