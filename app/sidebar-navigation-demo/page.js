'use client';
import React from 'react';
import {
  SidebarNavigation,
  SidebarNavigationProvider,
} from '@/components/sidebar-navigation';
// use tailwind css for styling

import styles from './sidebar-navigation-demo.module.css';

const Page = () => {
  return (
    <>
      <SidebarNavigationProvider>
        <div className={`${styles.page_wrapper} flex items-center justify-center w-screen h-screen p-8`}>
          <div className="w-full h-full">
            <SidebarNavigation />
          </div>
        </div>
      </SidebarNavigationProvider>
    </>
  );
};

export default Page;
