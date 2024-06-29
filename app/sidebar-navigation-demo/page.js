'use client';
import React from 'react';
import {
  useSidebarNavigations,
  SidebarNavigation,
} from '@/components/sidebar-navigation';
// use tailwind css for styling

const Page = () => {
  const sidebarNavigations = useSidebarNavigations();
  return (
    <>
      <SidebarNavigation />
    </>
  );
};

export default Page;
