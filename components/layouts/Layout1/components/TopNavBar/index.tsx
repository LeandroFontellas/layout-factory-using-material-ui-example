import { Toolbar, AppBar } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { drawerHeight, drawerWidth } from '../../constants';
import { Camera } from './components/Camera';

const TopNavBar = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(null);

  useEffect(() => {
    const localStorageBackgroundImage = localStorage.getItem(
      '@RandomCompany:HomeBackground',
    );
    if (localStorageBackgroundImage) {
      setBackgroundImage(localStorageBackgroundImage);
    }
  }, []);

  const background = (() => {
    if (backgroundImage) {
      return `linear-gradient(to bottom, rgba(25,16,35,0), #202020), url(${backgroundImage})`;
    }
    return 'linear-gradient(180deg, #202020 0%, #202020 100%)';
  })();

  return (
    <AppBar
      position="absolute"
      style={{
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        height: `${drawerHeight}px`,
        background,
      }}
      className="shadow-none"
    >
      <Toolbar className="w-full flex justify-between">
        <Camera setBackgroundImage={setBackgroundImage} />
      </Toolbar>
    </AppBar>
  );
};

export { TopNavBar };
