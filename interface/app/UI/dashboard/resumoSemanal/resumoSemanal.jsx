"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './resumoSemanal.module.css'


//CONFIGURAR ANALYTICS /GOOGLE
const data = [
  {
    name: 'Segunda-Feira',
    Clicks: 4000,
    Visitantes: 2400,
    amt: 2400,
  },
  {
    name: 'Terça-Feira',
    Clicks: 3000,
    Visitantes: 1398,
    amt: 2210,
  },
  {
    name: 'Quarta-Feira',
    Clicks: 2000,
    Visitantes: 9800,
    amt: 2290,
  },
  {
    name: 'Quinta-Feira',
    Clicks: 2780,
    Visitantes: 3908,
    amt: 2000,
  },
  {
    name: 'Sexta-Feira',
    Clicks: 1890,
    Visitantes: 4800,
    amt: 2181,
  },
  {
    name: 'Sábado',
    Clicks: 2390,
    Visitantes: 3800,
    amt: 2500,
  },
  {
    name: 'Domingo',
    Clicks: 3490,
    Visitantes: 4300,
    amt: 2100,
  },
];

const ResumoSemanal = () => {
    return ( 
        <div className={styles.container}>
            <h2 className={styles.titulo}>Resumo Semanal</h2>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="Visitantes" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line yAxisId="right" type="monotone" dataKey="Clicks" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
        </div>
     );
}
 
export default ResumoSemanal;