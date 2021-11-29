import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../ui/Layout'));

const Dashboard: React.FC = () => {
  return (
    <Layout title="My Notes">
      <h1>My Notes</h1>
    </Layout>
  );
};

export default Dashboard;
