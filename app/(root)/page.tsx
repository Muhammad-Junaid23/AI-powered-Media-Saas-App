import { UserButton } from '@clerk/nextjs';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>This is a heading in imaginify</h1>
      <UserButton afterSignOutUrl='/' />
    </div>
  );
};

export default Home;
