import React from 'react';
import { NextPageWithLayout } from '#lib/types/layouts';
import { Layout1 } from '#components/layouts/Layout1';
import { AdmHomeView } from '#components/views/AdmHomeView';

const Adm: NextPageWithLayout = () => {
  return <AdmHomeView />;
};

Adm.layout = Layout1;
export default Adm;
