"use client"

import React, { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';
import styles from './produtos.module.css'

const GraficoProdutos = () => {
  const [data, setData] = useState([
    { name: 'Boné', marca: 'Coca-Cola', uv: 4000, pv: 2400 },
    { name: 'Brico', marca: 'Nike', uv: 3000, pv: 1398 },
    { name: 'Tênis', marca: 'Apple', uv: 2000, pv: 9800 },
    { name: 'Chinelo', marca: 'Google', uv: 2780, pv: 3908 },
    { name: 'Bermuda', marca: 'Amazon', uv: 1890, pv: 4800 },
    { name: 'Maquiagem', marca: 'Microsoft', uv: 2390, pv: 3800 },
    { name: 'Jóias', marca: 'Samsung', uv: 3490, pv: 4300 },
    { name: 'Jóias', marca: 'Samsung', uv: 3490, pv: 4300 },
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (data, index) => {
    setActiveIndex(index);
  };

  const activeItem = data[activeIndex];

  return (
    <div style={{ width: '100%' }} className={styles.container}>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" onClick={handleClick}>
            {data.map((entry, index) => (
              <Cell
                cursor="pointer"
                fill={index === activeIndex ? '#82ca9d' : '#8884d8'}
                key={`cell-${index}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className={styles.containerTotal}>
        <div className={styles.contentConteudo}>
            <p className={styles.destaque}><span className={styles.espacamento}></span>Produto:</p> 
            <span>{activeItem.name}</span>
        </div>
        <div className={styles.contentConteudo}>
            <p className={styles.destaque}><span className={styles.espacamento1}></span>Marca:</p> 
            <span>{activeItem.marca}</span>
        </div>
        <div className={styles.contentConteudo}>
            <p className={styles.destaque}><span className={styles.espacamento2}></span>Estoque:</p> 
            <span>{activeItem.uv}</span>
        </div>
        <div className={styles.contentConteudo}>
            <p className={styles.destaque}><span className={styles.espacamento3}></span>Vendas:</p> 
            <span>{activeItem.pv}</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoProdutos;
