import React from 'react';
import { Link } from 'gatsby';

const SectionHeading = ({ children, className, to }) => (
  <div
    className={`block mt-4 pb-4 border-t border-yellow-100 ${
      !!className ? className : ''
    }`}
  >
    <h2 className="inline-block bg-green-900 transform -translate-y-4 pr-4">
      {!!to ? (
        <Link to={to}>
          {`// `}
          {children}
        </Link>
      ) : (
        <>
          {`// `}
          {children}
        </>
      )}
    </h2>
  </div>
);

export default SectionHeading;
