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
  const {sidebarNavigation} = useSidebarNavigation();
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg overflow-y-auto z-50">
        <div className="p-4">
          <nav className="space-y-2">
            <div className="flex items-center p-2 rounded-md hover:bg-gray-200">
              <FontAwesomeIcon
                className="pr-2"
                icon={faHouse}
                style={{ color: '#444e5d' }}
              />
              {!sidebarNavigation.collapsed && (
                <a href="#" className="text-gray-700">
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
