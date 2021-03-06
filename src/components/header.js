import { Link } from '@reach/router'
import React, { useState } from "react";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-gob">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4">
        <Link className="flex items-center no-underline text-white" to="/">
          <img alt="Get on Board" src="https://miro.medium.com/max/144/1*Ix6FQKrvtbIgoSahgL8CYw.png" className="fill-current"  width="144" height="36" ></img>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/`,
              title: `Jobs`
            },
            {
              route: `/favorite_jobs`,
              title: `Favorite Jobs`
            },
            {
              route: `/about`,
              title: `About`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
