
import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
  requireAuth?: boolean;
};

export const Layout: React.FC<LayoutProps> = ({ children, requireAuth = false }) => {
  const { currentUser } = useAuth();

  // Redirect to login if authentication is required but user is not logged in
  if (requireAuth && !currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
