import React from 'react';
import UserList from './UserList';

const Users = () => {
    const USERS = [
			{
				id: 'U1',
				name: 'Erik Correa',
				image:
					'https://images.pexels.com/photos/257897/pexels-photo-257897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
				places: 3,
			},
		];

    return (
        <UserList items={USERS} />
    );
};

export default Users;