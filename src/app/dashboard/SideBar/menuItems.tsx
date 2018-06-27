import * as React from 'react';
import { IMenuItems } from './ISideBar';
import {
  Drafts,
  Inbox,
  Report,
  SentimentVerySatisfied,
  Star,
} from '@material-ui/icons';

export const menuItems: Array<IMenuItems> = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard/home',
    icon: <Star />,
  },
  {
    id: 2,
    title: 'Widgets',
    path: '',
    icon: <Drafts />,
    isOpen: false,
    children: [
      {
        id: 21,
        title: 'Stats Widget',
        path: '/dashboard/widgets/stats',
        icon: <Report />,
      },
      {
        id: 22,
        title: 'Cool Widget',
        path: '/dashboard/widgets/coolstats',
        icon: <Report />,
      },
      {
        id: 23,
        title: 'More Widget',
        path: '/dashboard/widgets/morestats',
        icon: <Report />,
      },
    ],
  },
  {
    id: 3,
    title: 'Charts',
    path: '/dashboard/charts',
    icon: <Report />,
  },
  {
    id: 4,
    title: 'Buttons',
    path: '/dashboard/buttons',
    icon: <Inbox />,
  },
  {
    id: 5,
    title: 'Icons',
    path: '/dashboard/icons',
    icon: <SentimentVerySatisfied />,
  },
];
