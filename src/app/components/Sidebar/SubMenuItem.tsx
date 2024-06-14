import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface SubMenuItemProps {
  subMenuItem: { label: string; route: string };
  open: boolean;
  handleClick: (label: string) => void;
}

const SubMenuItem: React.FC<SubMenuItemProps> = ({ subMenuItem, open, handleClick }) => {
  const pathName = usePathname();
  const isActive = subMenuItem.route === pathName;

  return (
    <ListItem disablePadding sx={{ display: 'block', background: isActive ? '#f4f4f5' : '' }}>
      <Link href={subMenuItem.route} style={{ textDecoration: 'none', color: '#000' }}>
        <ListItemButton
          sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}
          onClick={() => handleClick(subMenuItem.label)}
        >
          <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
            <RadioButtonUncheckedIcon style={{ fontSize: '14px' }} />
          </ListItemIcon>
          <ListItemText primary={subMenuItem.label} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default SubMenuItem;
