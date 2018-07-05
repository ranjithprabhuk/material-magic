import * as React from 'react';
import { deepOrange } from '@material-ui/core/colors';
import { Star } from '@material-ui/icons';
import { iconStyle } from '../icons.styles';

export const colorVariantIcons = [
  {
      title: 'Default',
      icon: <Star style={iconStyle} />,
  },
  {
      title: 'Primary',
      icon: <Star color='primary' style={iconStyle} />,
  },
  {
      title: 'Secondary',
      icon: <Star color='secondary' style={iconStyle} />,
  },
  {
      title: 'Action',
      icon: <Star color='action' style={iconStyle} />,
  },
  {
      title: 'Error',
      icon: <Star color='error' style={iconStyle} />,
  },
  {
      title: 'Disabled',
      icon: <Star color='disabled' style={iconStyle} />,
  },
  {
      title: 'Inherit',
      icon: <Star color='inherit' style={iconStyle} />,
  },
  {
      title: 'Native Color',
      icon: <Star nativeColor={deepOrange[500]} style={iconStyle} />,
  },
];
