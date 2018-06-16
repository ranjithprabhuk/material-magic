import * as React from 'react';
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
    icon: <StarIcon />,
  },
  {
    id: 2,
    title: 'Widgets',
    path: '',
    icon: <DraftsIcon />,
    isOpen: false,
    children: [
      {
        id: 21,
        title: 'Stats Widget',
        path: '/dashboard/widgets/stats',
        icon: <ReportIcon />,
      },
      {
        id: 22,
        title: 'Cool Widget',
        path: '/dashboard/widgets/coolstats',
        icon: <ReportIcon />,
      },
      {
        id: 23,
        title: 'More Widget',
        path: '/dashboard/widgets/morestats',
        icon: <ReportIcon />,
      },
    ],
  },
  {
    id: 3,
    title: 'Charts',
    path: '/dashboard/charts',
    icon: <ReportIcon />,
  },
  {
    id: 4,
    title: 'Buttons',
    path: '/dashboard/buttons',
    icon: <InboxIcon />,
  },
];
