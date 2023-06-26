import React from 'react'
import Assessment from '@material-ui/icons/Assessment';
import { ArrowDownward, ArrowUpward, ChildCare } from '@material-ui/icons';

export const iconMap: { [key: string]: React.ElementType } = {
    'icon-dashboard': Assessment,
    'icon-robot': ChildCare,
    'icon-arrow-up': ArrowUpward,
    'icon-arrow-down': ArrowDownward,
  };