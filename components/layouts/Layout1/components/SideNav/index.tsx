import React, { useCallback, useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useGetOnePersonById } from '#lib/services/api/queries/useGetOnePersonById';
import { SideNavItem } from './components/SideNavItem';
import {
  drawerWidth,
  sideNavHrefs,
  sideNavKeys,
  sideNavOptionsMap,
} from '../../constants';

export const SideNav = () => {
  const { back, pathname } = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(() => {
    return sideNavHrefs.findIndex(item => pathname.includes(item));
  });
  const { img, name } = useGetOnePersonById();

  const handleSelect = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  useEffect(() => {
    setSelectedIndex(() => {
      return sideNavHrefs.findIndex(item => pathname.includes(item));
    });
  }, [pathname]);

  return (
    <Drawer
      classes={{
        paper: 'bg-[#202020] border-r border-solid border-[#353535]',
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <button
          className="flex items-center justify-center"
          type="button"
          onClick={() => back()}
        >
          <ArrowBackIcon style={{ color: 'white' }} />
          <span className="text-white font-gilroy-bold ml-3 text-lg">Back</span>
        </button>
      </Toolbar>
      <Box className="py-10">
        <div className="flex flex-col items-center">
          <Image src={img} width={58} height={58} className="rounded-full" />
          <span className="font-gilroy-medium text-white text-lg mt-3">
            {name}
          </span>
        </div>
      </Box>
      <List>
        {sideNavKeys.map((text, index) => (
          <SideNavItem
            key={text}
            index={index}
            selectedIndex={selectedIndex}
            handleSelect={handleSelect}
            text={text}
            Icon={sideNavOptionsMap[text]}
          />
        ))}
      </List>
    </Drawer>
  );
};
