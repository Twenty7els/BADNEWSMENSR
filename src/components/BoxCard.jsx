import React from 'react';
import './BoxCard.css';

export default function BoxCard({ box, style }) {
  return (
    <div className="box-card" style={style} >
      <img src={box.image} alt={box.name} className="box-card-img" />
      <div className="box-card-info">
        <div style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: 8}}>
          <h3 style={{margin: 0}}>{box.name}</h3>
          <span className="box-card-price">{box.price} ₽</span>
        </div>
        <p className="box-card-short">{box.short}</p>
        <div className="box-card-bottom">
          <button className="box-card-btn" style={{marginLeft: 8}}>В корзину</button>
        </div>
      </div>
    </div>
  );
}
