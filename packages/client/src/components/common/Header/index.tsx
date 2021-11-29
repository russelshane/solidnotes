import React from 'react';
import loadable from '@loadable/component';

import { HeaderElement } from './style';
import { HeaderProps } from './types';

const Logo = loadable(() => import('../../../ui/Logo'));

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderElement>
      <Logo />
    </HeaderElement>
  );
};

export default Header;
