import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import DashboardNav from '../components/Dashboard/DashboardNav';
import DashboardView from '../components/Dashboard/DashboardView';
const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // set the state based on the current width
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative block md:flex min-h-screen  w-full`}>
      {isMobile && isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black opacity-50 z-10'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <Sidebar 
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div
        className='flex-grow  min-h-max'>
        
        <DashboardView
          isMobile={isMobile}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </div>
  );
}

export default Dashboard;
