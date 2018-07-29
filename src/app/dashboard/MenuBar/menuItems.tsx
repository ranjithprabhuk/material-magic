import * as React from 'react';
import { IMenuItems } from './IMenuBar';
import Drafts from '@material-ui/icons/Drafts';
import Dashboard from '@material-ui/icons/Dashboard';
import TagFaces from '@material-ui/icons/TagFaces';
import PieChart from '@material-ui/icons/PieChart';
import Widgets from '@material-ui/icons/Widgets';
import Crop169 from '@material-ui/icons/Crop169';
import Description from '@material-ui/icons/Description';

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
    path: '/dashboard/widgets',
    icon: <Widgets />,
  },
  {
    id: 3,
    title: 'Charts',
    path: '/dashboard/charts',
    icon: <PieChart />,
  },
  {
    id: 4,
    title: 'Buttons',
    path: '/dashboard/buttons',
    icon: <Crop169 />,
  },
  {
    id: 5,
    title: 'Icons',
    path: '/dashboard/icons',
    icon: <TagFaces />,
  },
  {
    id: 6,
    title: 'Form Elements',
    path: '',
    icon: <Description />,
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
