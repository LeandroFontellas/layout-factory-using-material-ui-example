import React from 'react';
import Box from '@mui/material/Box';

import { Toolbar } from '@mui/material';
import { Layout } from '#lib/types/layouts';
import { SideNav } from './components/SideNav';
import { TopNavBar } from './components/TopNavBar';
import { drawerHeight, drawerWidth } from './constants';

export const Layout1Component: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="bg-[#202020]">
      <TopNavBar />
      <SideNav />
      <Box
        component="main"
        className="grow"
        style={{
          paddingLeft: drawerWidth + 40,
          paddingTop: 5,
          paddingRight: 5,
          paddingBottom: 5,
        }}
      >
        <Toolbar style={{ height: `${drawerHeight}px` }} />
        {children}
      </Box>
    </div>
  );
};

export const Layout1: Layout = page => {
  return <Layout1Component>{page}</Layout1Component>;
};
