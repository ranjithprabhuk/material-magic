import * as React from 'react';
import { IMenuItems } from './ISideBar';
import {
  Drafts,
  Inbox,
  Report,
  SentimentVerySatisfied,
  Star,
  SettingsInputComponent,
  Dashboard,
  PermContactCalendar,
} from '@material-ui/icons';

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
    icon: <Inbox />,
  },
  {
    id: 5,
    title: 'Icons',
    path: '/dashboard/icons',
    icon: <SentimentVerySatisfied />,
  },
  {
    id: 6,
    title: 'Form Elements',
    path: '',
    icon: <SettingsInputComponent />,
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
        icon: <SettingsInputComponent />,
      },
      {
        id: 63,
        title: 'Selection Controls',
        path: '/dashboard/form-elements/selection-controls',
        icon: <SettingsInputComponent />,
      },
      {
        id: 64,
        title: 'Dropdown Select',
        path: '/dashboard/form-elements/forms',
        icon: <SettingsInputComponent />,
      },
      {
        id: 65,
        title: 'Date Time Pickers',
        path: '/dashboard/form-elements/forms',
        icon: <PermContactCalendar />,
      },
    ],
  },
];
