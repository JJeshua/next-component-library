import React, { createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSidebarNavigation } from './sidebarNavigationProvider';

// css module styles
import styles from './sidebarNavigation.module.css';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBell,
  faGear,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import { NavItemComponent } from './navItemComponent';

/**
 * Sidebar navigation component. Accepts all props a div would accept.
 */
const SidebarNavigation = ({ ...rest }) => {
  const { sidebarNavigation } = useSidebarNavigation();
  return (
    <>
      {/* Navbar wrapper and background */}
      <div
        className={`${styles.glass} relative top-0 left-0 h-full w-64 overflow-y-auto z-50`}
      >
        {/* Content wrapper */}
        <div className="p-4">
          <nav className="space-y-2">
            {/* Logo / header */}
            <div></div>
            <NavItemComponent
              title="Home"
              icon={faHouse}
              sidebarNavigationState={sidebarNavigation}
            />
            <NavItemComponent
              title="Notifications"
              icon={faBell}
              sidebarNavigationState={sidebarNavigation}
            />
            <NavItemComponent
              title="Settings"
              icon={faGear}
              sidebarNavigationState={sidebarNavigation}
            />
            <NavItemComponent
              title="Profile"
              icon={faUser}
              sidebarNavigationState={sidebarNavigation}
            />
          </nav>
        </div>
      </div>
    </>
  );
};

export default SidebarNavigation;
