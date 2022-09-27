import React from 'react';
import ShortlyLogo from '../images/logo.svg';
import Button from './Button';

function Nav() {
  return (
    <nav className="flex flex-row justify-between items-center px-20 my-10">
      <section className="flex flex-row gap-10">
        <img src={ShortlyLogo} alt="Shortly" className="w-auto" />
        <a className="text-chgrayviolet" href="./">
          Features
        </a>
        <a className="text-chgrayviolet" href="./">
          Pricing
        </a>
        <a className="text-chgrayviolet" href="./">
          Resources
        </a>
      </section>
      <section className="gap-10 flex flex-row justify-center items-center">
        <a className="text-chgrayviolet" href="./">
          Login
        </a>
        <Button title="Sign Up" />
      </section>
    </nav>
  );
}

export default Nav;
