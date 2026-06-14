import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { prudentialTrend } from '../../data/mockData';

const currency = (value: number) => `NT$${Math.round(value / 10000).toLocaleString()}萬`;

export function PrudentialTrendChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={prudentialTrend} margin={{ top: 12, right: 24, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#dbe3ef" strokeDasharray="3 3" />
        <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#64748b" />
        <YAxis tickFormatter={currency} tick={{ fontSize: 12 }} stroke="#64748b" />
        <Tooltip
          formatter={(value, name) => [currency(Number(value)), name]}
          contentStyle={{ borderRadius: 8, borderColor: '#cbd5e1' }}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line
          type="monotone"
          dataKey="creditSupport"
          name="信用支援"
          stroke="#111a3a"
          strokeWidth={2.5}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="tradingLimit"
          name="交易上限"
          stroke="#7c3aed"
          strokeWidth={2.5}
          dot={false}
        />
        <Line
          type="linear"
          dataKey="outstandings"
          name="未結清金額"
          stroke="#d97706"
          strokeWidth={3}
          dot={{ r: 3, fill: '#d97706' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
