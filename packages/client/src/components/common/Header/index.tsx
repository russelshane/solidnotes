import React, { useState } from 'react';
import loadable from '@loadable/component';
import { MenuIcon } from '@heroicons/react/outline';

import { HeaderElement, MenuButton } from './style';
import { HeaderProps } from './types';

const Logo = loadable(() => import('../../../ui/Logo'));
const Container = loadable(() => import('../../../ui/Container'));
const TextInput = loadable(() => import('../../../ui/TextInput'));
const Sidebar = loadable(() => import('../Sidebar'));

const Header: React.FC<HeaderProps> = () => {
  const [searchValue, setSearchValue] = useState();
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <React.Fragment>
      <HeaderElement>
        <Container style={{ display: 'flex', gridGap: 20, alignItems: 'center' }}>
          <MenuButton onClick={() => setShowSidebar(!showSidebar)}>
            <MenuIcon />
          </MenuButton>
          <Logo />
          <TextInput
            placeholder="Search notes..."
            style={{ padding: '10px 12px', width: 400 }}
            onChange={(e) => setSearchValue(e.target.value as any)}
            value={searchValue}
          />
        </Container>
      </HeaderElement>
      <Sidebar show={showSidebar} />
    </React.Fragment>
  );
};

export default Header;
