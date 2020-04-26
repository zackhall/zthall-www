import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="mx-3 font-display font-bold uppercase hover:z-underline"
  >
    {children}
  </Link>
);

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query Logo {
      file(absolutePath: { regex: "/zh-logo/" }) {
        publicURL
      }
    }
  `);
  const logoUrl = data.file.publicURL;

  return (
    <div className="bg-green-800 text-white">
      <div className="container px-4">
        <div className="flex flex-row justify-between">
          <Link to="/">
            <img src={logoUrl} alt="Zack Hall logo" className="h-8 my-4" />
          </Link>
          <div className="flex h-8 my-4 items-center">
            <NavLink to="/notes">Notes</NavLink>
            <NavLink to="/contact">
              About<span className="tracking-tightest">&nbsp;&&nbsp;</span>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
