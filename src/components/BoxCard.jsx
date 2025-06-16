import React from 'react';
import './BoxCard.css';

export default function BoxCard({ box, style }) {
  return (
    <div className="box-card" style={style} >
      <img src={box.image} alt={box.name} className="box-card-img" />
      <div className="box-card-info">
        <h3>{box.name}</h3>
        <p className="box-card-short">{box.short}</p>
        <div className="box-card-bottom">
          <span className="box-card-price">{box.price} ₽</span>
          <button className="box-card-btn">Подробнее</button>
        </div>
      </div>
    </div>
  );
}
