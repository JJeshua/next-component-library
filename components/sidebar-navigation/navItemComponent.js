import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavItemComponent = ({ title, icon, sidebarNavigationState }) => {
  return (
    <>
      <div className="group flex items-center py-2 px-4 rounded-md hover:bg-blue-800 hover:text-slate-200 transition-colors duration-75">
        {icon && (
          <FontAwesomeIcon
            className="group-hover:text-inherit text-neutral-300 pr-2 transition-colors duration-75"
            icon={icon}
          />
        )}
        {!sidebarNavigationState.sidebarNavigationCollapsed && (
          <a
            href="#"
            className="group-hover:text-inherit text-neutral-300 transition-colors duration-75"
          >
            {title}
          </a>
        )}
      </div>
    </>
  );
};
