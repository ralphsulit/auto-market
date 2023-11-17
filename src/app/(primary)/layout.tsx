// ** React Imports
import React, { ReactNode } from 'react';

// ** Components
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto px-4 pt-8 h-screen max-w-4/5">
      <div className="flex-grow">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;