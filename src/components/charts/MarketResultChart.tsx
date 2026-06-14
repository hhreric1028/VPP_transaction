import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { marketResult } from '../../data/mockData';

export function MarketResultChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={marketResult.chartData} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="#64748b" />
        <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
        <Tooltip
          formatter={(value) => [`$${Number(value).toLocaleString()}`, '市場結果']}
          contentStyle={{ borderRadius: 8, borderColor: '#cbd5e1' }}
        />
        <Bar dataKey="value" fill="#1f4c8f" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
