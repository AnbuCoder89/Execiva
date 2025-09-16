import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import NewHeader from './components/NewHeader';
import Footer from './components/Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      {/* <Header /> */}
      <NewHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;