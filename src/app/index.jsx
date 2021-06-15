import React, { useState, useEffect } from 'react';

import {
  coinList,
  userList
} from './datasets';

import {
  Container,
  Logo
} from './styles';

import { SumList } from './components/SumList';
import { UserTable } from './components/UserTable';

export default function App() {
  const [userData, setUserData] = useState({
    prev: [],
    current: [],
  });

  const [isRecentUpdate, setIsRecentUpdate] = useState(false);

  useEffect(() => {
    setIsRecentUpdate(true);

    setTimeout(() => {
      setIsRecentUpdate(false);
    }, 1000);
  }, [userData]);

  return (
    <Container>
      <Logo src={'./img/StandardBit500Logo.svg'} />
      <SumList
        userData={userData}
        coinList={coinList}
        isRecentUpdate={isRecentUpdate}
        setIsRecentUpdate={setIsRecentUpdate}
      />
      <UserTable
        userList={userList}
        userData={userData}
        isRecentUpdate={isRecentUpdate}
        setUserData={setUserData}
        setIsRecentUpdate={setIsRecentUpdate}
      />
    </Container>
  );
}