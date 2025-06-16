import React from 'react';
import './Navigation.css';

export default function Navigation({ activeTab, onNavigate }) {
  return (
    <nav className="bottom-nav">
      <div className={"nav-item" + (activeTab === 'home' ? ' active' : '')} onClick={() => onNavigate('home')}>
        <span className="nav-icon">
          {/* Home Outline Icon */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12L12 4L21 12"/>
            <path d="M5 12V20A1 1 0 0 0 6 21H18A1 1 0 0 0 19 20V12"/>
          </svg>
        </span>
      </div>
      <div className={"nav-item" + (activeTab === 'boxes' ? ' active' : '')} onClick={() => onNavigate('boxes')}>
        <span className="nav-icon">
          {/* Cube Outline Icon */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 22 7 22 17 12 22 2 17 2 7 12 2"/>
            <path d="M2 7l10 5 10-5"/>
            <path d="M12 22V12"/>
          </svg>
        </span>
      </div>
      <div className={"nav-item" + (activeTab === 'cart' ? ' active' : '')} onClick={() => onNavigate('cart')}>
        <span className="nav-icon">
          {/* Shopping Bag Outline Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </span>
      </div>
      <div className={"nav-item" + (activeTab === 'profile' ? ' active' : '')} onClick={() => onNavigate('profile')}>
        <span className="nav-icon">
          {/* User Outline Icon */}
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-3 4-5 8-5s8 2 8 5"/>
          </svg>
        </span>
      </div>
    </nav>
  );
}
