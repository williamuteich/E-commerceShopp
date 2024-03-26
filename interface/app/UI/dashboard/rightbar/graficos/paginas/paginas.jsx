"use client"

import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './dispositivos.module.css'

const data = [
  {
    name: 'Page A',
    visualizacao: 590,
    convercao: 800,
    Tempo: 1400,
  },
  {
    name: 'Page B',
    visualizacao: 868,
    convercao: 967,
    Tempo: 1506,
  },
  {
    name: 'Page C',
    visualizacao: 1397,
    convercao: 1098,
    Tempo: 989,
  },
  {
    name: 'Page D',
    visualizacao: 1480,
    convercao: 1200,
    Tempo: 1228,
  },
  {
    name: 'Page E',
    visualizacao: 1520,
    convercao: 1108,
    Tempo: 1100,
  },

];



const GraficoPaginas = () => {
    return (
        <ResponsiveContainer width="100%" height={300} className={styles.container}>
            <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={data}
            className={styles.container}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            }}
            >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" />
            <Tooltip />
            <Legend />
            <Area dataKey="Tempo" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="convercao" barSize={20} fill="#413ea0" />
            <Line dataKey="visualizacao" stroke="#ff7300" />
            </ComposedChart>
      </ResponsiveContainer>
    );
}
 
export default GraficoPaginas;
