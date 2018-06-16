import { IMenuItems } from './ISideBar';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import ReportIcon from '@material-ui/icons/Report';

export const menuItems: Array<IMenuItems> = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard/home',
    icon: StarIcon,
  },
  {
    id: 2,
    title: 'Widgets',
    path: '/dashboard/widgets',
    icon: DraftsIcon,
  },
  {
    id: 3,
    title: 'Charts',
    path: '/dashboard/charts',
    icon: ReportIcon,
  },
  {
    id: 4,
    title: 'Buttons',
    path: '/dashboard/buttons',
    icon: InboxIcon,
  },
];
