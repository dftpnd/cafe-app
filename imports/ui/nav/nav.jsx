import React, {useContext} from 'react';

import MenuContext from '../context.js';
import NavLinks from './nav-links.jsx';
import style from './nav.css';

export default function nav(params) {
  const menu = useContext(MenuContext);

  return (
    <nav className="nav">
      <section className="nav__menu">
        <div className="nav__scroll">
          {menu.map(item => <NavLinks key={item.id} {...item} />)}
        </div>
      </section>
      <div className="nav_scroll_border" />
    </nav>
  );
}
