import React from 'react';
import BoxCard from './BoxCard';

const boxes = [
  {
    id: 'brutal',
    name: 'Первый уровень',
    image: '/1.jpeg',
    price: 2490,
    short: 'базовый набор для ежедневного ухода',
  },
  {
    id: 'detox',
    name: 'Детокс кожи',
    image: '/2.jpeg',
    price: 2190,
    short: 'От кругов и усталости. Глубокое очищение и свежесть.',
  },
  {
    id: 'sport',
    name: 'Спорт и стиль',
    image: '/3.jpeg',
    price: 2290,
    short: 'Для активных мужчин. Уход после тренировок и для стиля.',
  }
];

export default function BoxList() {
  return (
    <div className="box-list">
      {boxes.map((box, idx) => (
        <BoxCard key={box.id} box={box} style={idx === boxes.length - 1 ? { marginBottom: '45px' } : {}} />
      ))}
    </div>
  );
}
