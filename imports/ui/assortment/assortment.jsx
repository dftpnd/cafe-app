import React, { useContext } from 'react';

import MenuContext from '../context.js';
import style from './assortment.css';

const Assortment = ({children}) => {
    const menu = useContext(MenuContext);

    return (<section className="assortment">
    <div className="assortment__wrap">
        {menu.map(group => (
            <div key={group.id} className="assortment__item" >
                <div className="assortment__item">
                    {children(group.list)}
                </div>
            </div>
        ))}
    </div>
</section>)
}


export default Assortment;