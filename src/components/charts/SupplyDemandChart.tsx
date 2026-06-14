import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { balanceTrend } from '../../data/mockData';

export function SupplyDemandChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={balanceTrend} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
        <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
        <XAxis dataKey="time" tick={{ fontSize: 12 }} stroke="#64748b" />
        <YAxis unit=" MWh" tick={{ fontSize: 12 }} stroke="#64748b" />
        <Tooltip contentStyle={{ borderRadius: 8, borderColor: '#cbd5e1' }} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="supply" name="供給" fill="#22345f" radius={[3, 3, 0, 0]} />
        <Bar dataKey="demand" name="需求" fill="#0e7490" radius={[3, 3, 0, 0]} />
        <Bar dataKey="cleared" name="已清算成交量" fill="#7c3aed" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
