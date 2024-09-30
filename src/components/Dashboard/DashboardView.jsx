import React from 'react'
import DashboardNav from './DashboardNav'
import DashboardData from './DashboardData'

const DashboardView = (
    { isMobile,
        isSidebarOpen,
        setIsSidebarOpen
    }
) => {
    return (
        <div className='w-full min-h-screen h-max bg-mist'>
            <div>
                <DashboardNav
                    isMobile={isMobile}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <div onClick={() => setIsSidebarOpen(false)}>
                    <DashboardData />
                </div>
            </div>

        </div>
    )
}

export default DashboardView
