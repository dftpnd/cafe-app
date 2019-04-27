import React from 'react';
import style from './price.css';

export const Price = () => 
(<span className="price__box">
    <span className="price__length">{length}</span>
    <span className="price__x">&ensp;×&ensp;</span>
    <span className="price__price">{price}</span>
</span>);