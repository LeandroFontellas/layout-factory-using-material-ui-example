import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

export const drawerWidth = 240;
export const drawerHeight = 400;
export const sideNavOptionsMap = {
  Home: HomeIcon,
  Perfil: PersonIcon,
  'Convidar Staff': PersonAddIcon,
  Torneios: EmojiEventsIcon,
};
export const sideNavHrefs = ['home', 'profile', 'friends', 'waiting room'];
export const sideNavKeys = Object.keys(
  sideNavOptionsMap,
) as (keyof typeof sideNavOptionsMap)[];
