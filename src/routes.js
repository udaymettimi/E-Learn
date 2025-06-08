import React from 'react';

import { MdLeaderboard } from "react-icons/md";
import { Icon } from '@chakra-ui/react';
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdDescription,
  MdSchool, // Added for My Learning icon
} from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import NFTMarketplace from 'views/admin/marketplace';
import Profile from 'views/admin/profile';
import ResumeGenerator from 'views/admin/resumeGenerator';
import Leaderboard from "views/admin/leaderboard";

// Auth Imports
import SignInCentered from 'views/auth/signIn';

const routes = [
  {
    name: 'Home',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'Marketplace',
    layout: '/admin',
    path: '/nft-marketplace',
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: <NFTMarketplace />,
    secondary: true,
  },
  {
    name: 'Resume Generator',
    layout: '/admin',
    icon: <Icon as={MdDescription} width="20px" height="20px" color="inherit" />,
    path: '/resume-generator',
    component: <ResumeGenerator />,
  },
  {
    name: 'Profile',
    layout: '/admin',
    path: '/profile',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: <Profile />,
  },
  {
    name: 'My Learning',
    layout: '/admin',
    path: '/my-learning',
    icon: <Icon as={MdSchool} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />, // You'll want to replace this with your actual learning component
  },
 {
    name: "Leaderboard",
    layout: "/admin",
    path: "/leaderboard",
    icon: <Icon as={MdLeaderboard} width='20px' height='20px' color='inherit' />,
    component: <Leaderboard />,
 },
];

export default routes;