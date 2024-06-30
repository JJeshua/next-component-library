'use client';
import React from 'react';
import {
  SidebarNavigation,
  SidebarNavigationProvider,
} from '@/components/sidebar-navigation';
// use tailwind css for styling

const Page = () => {
  return (
    <>
      <SidebarNavigationProvider>
        <div className="bg-stone-200 flex items-center justify-center w-screen h-screen p-8">
          <div className="w-full h-full">
            <SidebarNavigation />
          </div>
        </div>
      </SidebarNavigationProvider>
    </>
  );
};

export default Page;
