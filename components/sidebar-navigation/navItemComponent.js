import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './sidebarNavigation.module.css';

export const NavItemComponent = ({ title, icon, sidebarNavigationState }) => {
  return (
    <>
      <div
        className={`glass ${styles.nav_item} flex items-center py-2 px-4 rounded-md transition-colors duration-75`}
      >
        {icon && (
          <FontAwesomeIcon
            className={`size-5 text-neutral-300 ${
              !sidebarNavigationState.sidebarNavigationCollapsed ? 'pr-2' : ''
            } transition-colors duration-75`}
            icon={icon}
          />
        )}
        {!sidebarNavigationState.sidebarNavigationCollapsed && (
          <a
            href="#"
            className="text-neutral-300 transition-colors duration-75"
          >
            {title}
          </a>
        )}
      </div>
    </>
  );
};
