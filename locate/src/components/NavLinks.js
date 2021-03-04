import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styling/NavLinks.css';


const NavLinks = () => {
    return (
			<ul className='nav-links'>
				<li>
					<NavLink to='/' exact >All USERS</NavLink>
				</li>
				<li>
					<NavLink to='/u1/places'>My PLACES</NavLink>
				</li>
				<li>
					<NavLink to='/places/new'>ADD PLACE</NavLink>
				</li>
				<li>
					<NavLink to='/auth'>AUTHENTICATE</NavLink>
				</li>
			</ul>
		);
};

export default NavLinks;