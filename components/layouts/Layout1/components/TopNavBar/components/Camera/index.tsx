import React, { ChangeEvent, Dispatch, SetStateAction } from 'react';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { getBase64 } from '#lib/services/api/utils/getBase64';

type ICameraProps = {
  setBackgroundImage: Dispatch<SetStateAction<string | null>>;
};

const Camera = ({ setBackgroundImage }: ICameraProps) => {
  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];

      if (file.size > 1000000) {
        throw new Error('Max size image is 1MB, please select another image.');
      }

      const convertedImage = await getBase64(file);
      setBackgroundImage(convertedImage as string | null);
      localStorage.setItem(
        '@EqualsSport:evobackground',
        JSON.stringify(convertedImage),
      );
    }
  };
  return (
    <label
      className="rounded-full p-3 bg-[hsl(0,0%,20%)] cursor-pointer hover:bg-[hsl(0,0%,33%)] transition-all"
      htmlFor="profile-background"
    >
      <input
        type="file"
        onChange={handleChange}
        name="profile-background"
        id="profile-background"
        style={{ display: 'none' }}
      />
      <CameraAltIcon type="white" />
    </label>
  );
};

export { Camera };
