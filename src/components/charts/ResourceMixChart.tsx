import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { resourceMix } from '../../data/mockData';

export function ResourceMixChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={resourceMix}
          dataKey="value"
          nameKey="name"
          innerRadius={62}
          outerRadius={96}
          paddingAngle={2}
          label={({ name, value }) => `${name} ${value}%`}
        >
          {resourceMix.map((entry) => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => [`${value}%`, '清算組合']} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}
