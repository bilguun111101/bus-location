import React from 'react';
import { Home } from '../components';
import { HomeProvider } from '../context';

export const HomeScreen = () => {
  return (
    <HomeProvider>
      <Home />
    </HomeProvider>
  )
}
