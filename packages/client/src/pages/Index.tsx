import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../ui/Layout'));

const Index: React.FC = () => {
  return (
    <Layout title="Login - SolidNotes">
      <h1>SolidNotes</h1>
    </Layout>
  );
};

export default Index;
