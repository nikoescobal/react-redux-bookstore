import React from 'react';
import { Link } from 'react-router-dom';
import '../App';

const Nav = () => (
  <div className="flex bg-gray-50 px-16 py-12 items-center align-middle justify-between font-nunito">
    <div className="flex space-x-10 justify-between items-center align-middle">
      <h1 className="font-bold text-blue-600 text-3xl">Bookstore CMS</h1>
      <h2 className="uppercase text-gray-500">
        <Link to="/">Books</Link>
      </h2>
      <h2 className="uppercase text-gray-500">
        <Link to="/categories">Categories</Link>
      </h2>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8"
      viewBox="0 0 20 20"
      fill="fill-current text-blue-600"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

export default Nav;
