import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import Header from "./header";

function Layout({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div className="leading-normal tracking-normal text-white gradient">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="">
            {children}
          </div>

          <footer className="bg-white">
	<div className="container mx-auto  px-8">

        <div className="w-full flex flex-col md:flex-row py-6">
				
			<div className="flex-1 mb-6 text-blue-600">
			
			Le Plombier Parisien. Plomberie et urgences dans toute la ville de Paris.<a className="underline" href="tel:0676009402"> Appelez  Maintenant</a>
			</div>
		
		
        </div>
    </div>
	
	
</footer>
        </div>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
