import React, { createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSidebarNavigation } from './sidebarNavigationProvider';

// css module styles
import styles from './sidebarNavigation.module.css';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import { NavItemComponent } from './navItemComponent';

/**
 * Sidebar navigation component. Accepts all props a div would accept.
 */
const SidebarNavigation = ({ ...rest }) => {
  const { sidebarNavigation } = useSidebarNavigation();
  return (
    <>
      <div
        className={`${styles.glass} relative top-0 left-0 h-full w-64 overflow-y-auto z-50`}
      >
        <div className="p-4">
          <nav className="space-y-2">
            <NavItemComponent
              title="Home"
              icon={faHouse}
              sidebarNavigationState={sidebarNavigation}
            />
            <a
              href="#"
              className="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
            >
              About
            </a>
            <a
              href="#"
              className="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
            >
              Services
            </a>
            <a
              href="#"
              className="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default SidebarNavigation;
