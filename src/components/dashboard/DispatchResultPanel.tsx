import { dispatchResults } from '../../data/mockData';
import type { DispatchResult } from '../../types/market';
import { DataTable } from '../common/DataTable';
import { SectionCard } from '../common/SectionCard';
import { StatusBadge } from '../common/StatusBadge';

export function DispatchResultPanel() {
  return (
    <SectionCard
      title="調度結果"
      subtitle="正值代表發電或放電；負值代表用電、充電或負載削減。"
    >
      <DataTable<DispatchResult>
        data={dispatchResults}
        columns={[
          { header: '資源', accessor: 'resource' },
          { header: '資源類型', accessor: 'resourceType' },
          { header: '調度目標', accessor: 'dispatchTarget', align: 'right' },
          { header: '實際出力 / 用電', accessor: 'actualOutput', align: 'right' },
          { header: '偏差', accessor: 'deviation', align: 'right' },
          { header: '指令', accessor: 'instruction' },
          { header: '狀態', accessor: (row) => <StatusBadge status={row.status} /> },
        ]}
      />
    </SectionCard>
  );
}
