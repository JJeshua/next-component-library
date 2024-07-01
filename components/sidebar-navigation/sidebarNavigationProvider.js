'use client';
import React, { createContext, useContext, useRef, useState } from 'react';

const SidebarNavigationContext = createContext();

/**
 * Hook to use the sidebar navigation context.
 * @returns {Object} The sidebar navigation context.
 */
export const useSidebarNavigation = () => useContext(SidebarNavigationContext);

/**
 * Wrapper component to provide toast functionality.  Should wrap the entire app.
 */
export const SidebarNavigationProvider = ({ children }) => {
  const [sidebarNavigation, setSidebarNavigation] = useState({
    sidebarNavigationCollapsed: false,
  });

  const toggleCollapseSidebar = () => {
    setSidebarNavigation((prevState) => ({
      ...prevState,
      sidebarNavigationCollapsed: !prevState.sidebarNavigationCollapsed,
    }));
  };

  return (
    <SidebarNavigationContext.Provider
      value={{ sidebarNavigation, toggleCollapseSidebar }}
    >
      {children}
    </SidebarNavigationContext.Provider>
  );
};
