import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './sidebarNavigation.module.css';

export const NavItemComponent = ({ title, icon, sidebarNavigationState }) => {
  return (
    <>
      <div
        className={`glass cursor-pointer ${styles.nav_item} flex items-center py-2 px-4 rounded-md transition-colors duration-75`}
      >
        {icon && (
          <FontAwesomeIcon
            className={`size-5 text-neutral-300 ${
              !sidebarNavigationState.sidebarNavigationCollapsed ? 'pr-2' : ''
            } transition-colors duration-75`}
            icon={icon}
          />
        )}
        <CSSTransition
          in={!sidebarNavigationState.sidebarNavigationCollapsed}
          timeout={200}
          classNames={{
            enter: styles['collapse-enter'],
            enterActive: styles['collapse-enter-active'],
            exit: styles['collapse-exit'],
            exitActive: styles['collapse-exit-active'],
          }}
          unmountOnExit
        >
          <a
            href="#"
            className="text-neutral-300 transition-colors duration-75"
          >
            {title}
          </a>
        </CSSTransition>
      </div>
    </>
  );
};
