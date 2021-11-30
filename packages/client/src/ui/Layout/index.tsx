import React, { useEffect } from 'react';
import { LayoutElement } from './style';
import { LayoutProps } from './types';

const Layout: React.FC<LayoutProps> = ({ children, title, dark }) => {
  // This function will set a custom page title if provided by a component
  useEffect(() => {
    document.title = title ? title : 'SolidNotes';
  }, [title]);

  return <LayoutElement className={`${dark && 'dark'}`}>{children}</LayoutElement>;
};

export default Layout;
