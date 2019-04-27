import React from 'react';
import style from './buttons.css';

export const OrderButton = ({handler}) => (
    <button type="button" className="" onClick={handler}>
        заказать
    </button>
);
  
export const DeleteButton = ({handler}) => (
    <button type="button" onClick={handler}>
      удалить
    </button>
);
  
export const AddButton = ({handler}) => (
    <button type="button" onClick={handler}>
        добавить
    </button>
);

export default AddButton;
  