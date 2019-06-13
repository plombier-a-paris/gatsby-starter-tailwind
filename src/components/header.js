import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="fixed w-full z-30 top-0 text-gray-800 bg-white shadow">
    <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div className="pl-4 flex items-center">
			<a className="toggleColour  no-underline hover:no-underline font-bold text-2xl lg:text-4xl"  href="/">	
         {siteTitle}
			</a>
		</div>

		<div className="block lg:hidden pr-4">
			<button onClick={() => toggleExpansion(!isExpanded)} id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-white-500 border-white-600 hover:text-blue-800 hover:border-blue-800 appearance-none focus:outline-none">
				<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
			</button>
		</div>

     
    </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
