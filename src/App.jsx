import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero';
import BoxList from './components/BoxList';
import Navigation from './components/Navigation';
import './styles/global.css';
import { tg, useTelegramTheme } from './telegram';

export default function App() {
  const [theme, setTheme] = useState({});
  const [activeTab, setActiveTab] = useState('home');
  const boxesRef = useRef(null);
  const homeRef = useRef(null);

  // Telegram theme sync
  useTelegramTheme(setTheme);
  useEffect(() => {
    if (!tg) return;
    document.body.style.background = theme.bg_color || '#000';
    // mainButton для оформления заказа
    tg.MainButton.setParams({
      text: 'Оформить заказ',
      color: theme.button_color || '#2AABEE',
      text_color: theme.button_text_color || '#fff',
      is_visible: activeTab === 'cart',
    });
    if (activeTab === 'cart') {
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }
    // mainButton click
    const onMainButtonClicked = () => {
      // Здесь логика оформления заказа
      tg.showAlert('Заказ оформлен!');
    };
    tg.onEvent('mainButtonClicked', onMainButtonClicked);
    return () => tg.offEvent('mainButtonClicked', onMainButtonClicked);
  }, [theme, activeTab]);

  // Навигация по кнопкам
  const handleNav = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') homeRef.current?.scrollIntoView({ behavior: 'smooth' });
    if (tab === 'boxes') boxesRef.current?.scrollIntoView({ behavior: 'smooth' });
    // Для cart/profile можно добавить отдельные компоненты или модалки
  };

  return (
    <div style={{ minHeight: '100vh', background: theme.bg_color || 'var(--color-bg)' }}>
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
