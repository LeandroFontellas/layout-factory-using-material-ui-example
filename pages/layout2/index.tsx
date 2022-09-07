import React from 'react';
import { NextPageWithLayout } from '#lib/types/layouts';
import { Layout2 } from '#components/layouts/Layout2';
import { UserHomeView } from '#components/views/UserHomeView';

const User: NextPageWithLayout = () => {
  return <UserHomeView />;
};

User.layout = Layout2;
export default User;
