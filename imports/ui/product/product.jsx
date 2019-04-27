import React from 'react';

import style from './product.css';
import Price from './price.jsx';
import { AddButton, DeleteButton, OrderButton } from './buttons.jsx';

const isEmpty = true;
const Product = ({dish, name, name_2, price }) =>
(<div className="product">
    <div className="product__content">
        <div className="product__info">
            <h3 className="product__title">
                <span className="product__wraptitle">{name}</span>
            </h3>
            <div className="product__price price">
                {!isEmpty && <Price />}
                <div>format&ensp;₽</div>
            </div>
        </div>
        <div className="product__action">
            <p className="product__text">{name_2}</p>
            <div className="product__manage">
                {isEmpty && (<AddButton handler={()=>{}} />)}
                {!isEmpty && (
                    <div className="product__not-empty">
                        <DeleteButton handler={()=>{}} />
                        <OrderButton handler={()=>{}} />
                    </div>
                )}
            </div>
        </div>
    </div>
</div>);

export default Product;