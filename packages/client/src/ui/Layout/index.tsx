import React, { useEffect } from 'react';
import { LayoutElement } from './style';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children, title, dark }) => {
  // This function will set a custom page title if provided by a component
  useEffect(() => {
    if (title && title.length > 1) {
      document.title === title;
    } else {
      document.title === 'SolidNotes';
    }
  }, []);

  return <LayoutElement className={`${dark && 'dark'}`}>{children}</LayoutElement>;
};

export default Layout;
