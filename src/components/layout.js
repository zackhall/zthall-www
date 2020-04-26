import React from 'react';

import Navigation from './navigation';

const Layout = ({ children, header, dark }) => {
  return (
    <div className={`min-h-screen relative ${!!dark ? 'body-dark' : ''}`}>
      <Navigation />
      {header}
      <main className="container px-4 pt-10 pb-24">{children}</main>
      <footer className="absolute bottom-0 left-0 right-0 bg-green-800 text-green-200">
        <div className="container p-4">
          © {new Date().getFullYear()} Zack Hall, Proudly built in Melrose, MA.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
