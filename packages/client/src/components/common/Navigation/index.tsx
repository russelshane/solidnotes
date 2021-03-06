import React from 'react';
import loadable from '@loadable/component';

const Container = loadable(() => import('../../../ui/Container'));

const Navigation: React.FC = () => {
  return (
    <Container style={{ alignItems: 'center', display: 'flex', gridGap: 10 }}></Container>
  );
};

export default Navigation;
