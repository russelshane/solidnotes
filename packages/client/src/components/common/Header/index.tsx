import React from 'react';
import loadable from '@loadable/component';

import { HeaderElement } from './style';
import { HeaderProps } from './types';

const Logo = loadable(() => import('../../../ui/Logo'));
const Container = loadable(() => import('../../../ui/Container'));
const TextInput = loadable(() => import('../../../ui/TextInput'));

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderElement>
      <Container style={{ display: 'flex', gridGap: 20, alignItems: 'center' }}>
        <Logo />
        <TextInput
          placeholder="Search notes..."
          style={{ padding: '10px 12px', width: 400 }}
        />
      </Container>
    </HeaderElement>
  );
};

export default Header;
