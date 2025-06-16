import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import BoxList from './components/BoxList';
import Navigation from './components/Navigation';
import './styles/global.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const boxesRef = useRef(null);
  const homeRef = useRef(null);

  // Навигация по кнопкам
  const handleNav = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'boxes') boxesRef.current?.scrollIntoView({ behavior: 'smooth' });
    // Для cart/profile можно добавить отдельные компоненты или модалки
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div ref={homeRef} />
      <Hero onChooseBox={() => handleNav('boxes')} />
      <div ref={boxesRef} style={{ marginTop: 430 }}>
        <BoxList />
      </div>
      {/* Здесь можно добавить отображение корзины и профиля */}
      <Navigation activeTab={activeTab} onNavigate={handleNav} />
    </div>
  );
}
