'use client';
import React, { createContext, useContext, useRef, useState } from 'react';

const SidebarNavigationContext = createContext();

/**
 * Hook to use the sidebar navigation context.
 * @returns {Object} The sidebar navigation context.
 */
export const useSidebarNavigations = () => useContext(SidebarNavigationContext);

/**
 * Wrapper component to provide toast functionality.  Should wrap the entire app.
 */
export const SidebarNavigationProvider = ({ children }) => {
  const [sidebarNavigations, setSidebarNavigations] = useState([]);

  return (
    <SidebarNavigationContext.Provider value={{ sidebarNavigations }}>
      {children}
    </SidebarNavigationContext.Provider>
  );
};
