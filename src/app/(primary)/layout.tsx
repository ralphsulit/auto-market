// ** React Imports
import React, { ReactNode } from 'react';

// ** Components
import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto h-screen">
      <div className="flex-grow">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;