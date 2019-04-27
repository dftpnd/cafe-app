import React from 'react';

import style from './nav-links.css';

export default function navLinks({id, title}) {
  return (<div className="nav-links">
            <a href={`#${id}`}>{title}</a>
          </div>);
}
