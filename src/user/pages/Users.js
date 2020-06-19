import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'John Wood',
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/0b/01/7e/23/outdoor-view.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
