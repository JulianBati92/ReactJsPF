import React from 'react';

const NavbarItem = (props) => {
  const { name, component: Component } = props;

  if (Component) {
    return (
      <li className="nav-item">
        <Component />
      </li>
    );
  }

  return (
    <li className="nav-item">
      <p className="nav-link">{name}</p>
    </li>
  );
};

export default NavbarItem;
