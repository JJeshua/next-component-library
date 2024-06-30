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
        <SidebarNavigation />
      </SidebarNavigationProvider>
    </>
  );
};

export default Page;
