import React from 'react';
import './Hero.css';

export default function Hero({ onChooseBox }) {
  return (
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-content">
        <div className="hero-company-name">BAD NEWS MEN'S</div>
        <div className="hero-slogan">Лаконичность. Сила. Контроль.</div>
        <p className="hero-description">Мужские уходовые боксы, собранные с характером.<br />Выбирай набор под свой стиль<br />Никакой мишуры — только польза, качество и уверенность</p>
        <div className="hero-btn-container">
          <div className="hero-btn-group">
            <button className="hero-btn" onClick={onChooseBox}>Выбрать набор</button>
            <button className="hero-btn hero-btn-secondary">О компании</button>
          </div>
        </div>
      </div>
    </section>
  );
}
