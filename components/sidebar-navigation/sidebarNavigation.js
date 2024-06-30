import React, { createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSidebarNavigation } from './sidebarNavigationProvider';

// css module styles
import styles from './sidebarNavigation.module.css';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

/**
 * Sidebar navigation component. Accepts all props a div would accept.
 */
const SidebarNavigation = ({ ...rest }) => {
  const { sidebarNavigation } = useSidebarNavigation();
  return (
    <>
      <div className="relative top-0 left-0 h-full w-64 bg-gray-100 shadow-lg overflow-y-auto z-50">
        <div className="p-4">
          <nav className="space-y-2">
            <div className="group flex items-center py-2 px-4 rounded-md hover:bg-blue-800 hover:text-slate-200 transition-colors duration-200">
              <FontAwesomeIcon
                className="group-hover:text-inherit text-neutral-900 pr-2 transition-colors duration-200"
                icon={faHouse}
              />
              {!sidebarNavigation.sidebarNavigationCollapsed && (
                <a
                  href="#"
                  className="group-hover:text-inherit text-neutral-900 transition-colors duration-200"
                >
                  Home
                </a>
              )}
            </div>
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
