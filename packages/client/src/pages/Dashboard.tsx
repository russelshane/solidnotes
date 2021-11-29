import React from 'react';
import loadable from '@loadable/component';

const Layout = loadable(() => import('../ui/Layout'));
const Header = loadable(() => import('../components/common/Header'));

const Dashboard: React.FC = () => {
  return (
    <Layout title="My Notes">
      <Header />
    </Layout>
  );
};

export default Dashboard;
