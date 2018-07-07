import * as React from 'react';
import { IMenuItems } from './ISideBar';
import Drafts from '@material-ui/icons/Drafts';
import Dashboard from '@material-ui/icons/Dashboard';
import Star from '@material-ui/icons/Star';
import Report from '@material-ui/icons/Report';

export const menuItems: Array<IMenuItems> = [
  {
    id: 1,
    title: 'Dashboard',
    path: '/dashboard/home',
    icon: <Dashboard />,
  },
  {
    id: 2,
    title: 'Widgets',
    path: 'widgets',
    icon: <Star />,
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
    icon: <Star />,
  },
  {
    id: 5,
    title: 'Icons',
    path: '/dashboard/icons',
    icon: <Dashboard />,
  },
  {
    id: 6,
    title: 'Form Elements',
    path: '',
    icon: <Dashboard />,
    isOpen: false,
    children: [
      {
        id: 61,
        title: 'Forms',
        path: '/dashboard/form-elements/forms',
        icon: <Drafts />,
      },
      {
        id: 62,
        title: 'Text Fields',
        path: '/dashboard/form-elements/text-fields',
        icon: <Dashboard />,
      },
      {
        id: 63,
        title: 'Selection Controls',
        path: '/dashboard/form-elements/selection-controls',
        icon: <Dashboard />,
      },
      {
        id: 64,
        title: 'Dropdown Select',
        path: '/dashboard/form-elements/forms',
        icon: <Dashboard />,
      },
      {
        id: 65,
        title: 'Date Time Pickers',
        path: '/dashboard/form-elements/forms',
        icon: <Dashboard />,
      },
    ],
  },
];
