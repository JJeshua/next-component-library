import React, { createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useSidebarNavigations } from './sidebarNavigationProvider';

// css module styles
import styles from './sidebarNavigation.module.css';

// fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

const iconMap = {
  success: faCheckCircle,
  error: faExclamationCircle,
};

const Icon = ({ style }) => {
  <i className={styles.toastIcon}>
    {iconMap[style] ? <FontAwesomeIcon icon={iconMap[style]} /> : null}
  </i>;
};

/**
 * Sidebar navigation component. Accepts all props a div would accept.
 */
const SidebarNavigation = ({ ...rest }) => {
  const sidebarNavigations = useSidebarNavigations();
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg overflow-y-auto z-50">
        <div class="p-4">
          <nav class="space-y-2">
            <a
              href="#"
              class="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
            >
              Home
            </a>
            <a
              href="#"
              class="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
            >
              About
            </a>
            <a
              href="#"
              class="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
            >
              Services
            </a>
            <a
              href="#"
              class="block p-2 rounded-md text-gray-700 hover:bg-gray-200"
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
