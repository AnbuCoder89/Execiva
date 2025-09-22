import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeaderDemo from './components/HeaderDemo';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      {/* <HeaderDemo /> */}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;