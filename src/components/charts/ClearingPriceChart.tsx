import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { clearingPriceTrend } from '../../data/mockData';

export function ClearingPriceChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={clearingPriceTrend} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
        <XAxis dataKey="interval" tick={{ fontSize: 12 }} stroke="#64748b" />
        <YAxis unit=" $" tick={{ fontSize: 12 }} stroke="#64748b" />
        <Tooltip
          formatter={(value) => [`${value} $/MWh`, '清算價格']}
          contentStyle={{ borderRadius: 8, borderColor: '#cbd5e1' }}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#1f4c8f"
          strokeWidth={3}
          dot={{ r: 3, fill: '#1f4c8f' }}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
