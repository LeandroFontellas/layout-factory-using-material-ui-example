import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import Link from 'next/link';
import { sideNavHrefs } from '../../../../constants';

type ISideNavItemProps = {
  index: number;
  selectedIndex: number;
  text: string;
  handleSelect: (index: number) => void;
  Icon: OverridableComponent<SvgIconTypeMap> & { muiName: string };
};

const SideNavItem = ({
  index,
  selectedIndex,
  text,
  handleSelect,
  Icon,
}: ISideNavItemProps) => {
  const isSelected = index === selectedIndex;
  return (
    <ListItem
      disablePadding
      className={`${
        isSelected ? 'text-white' : 'text-[#8C8C8C]'
      } font-gilroy-medium text-sm`}
      classes={{ root: `${isSelected ? 'bg-[#363636]' : ''}` }}
    >
      <Link href={`/evo/${sideNavHrefs[index]}`} className="flex flex-1">
        <ListItemButton onClick={() => handleSelect(index)} className="pl-10">
          <ListItemIcon className="min-w-[40px]">
            {isSelected ? (
              <Icon style={{ color: 'white' }} />
            ) : (
              <Icon style={{ color: '#8C8C8C' }} />
            )}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export { SideNavItem };
