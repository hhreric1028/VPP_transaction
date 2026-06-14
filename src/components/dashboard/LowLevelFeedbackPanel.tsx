import { lowLevelFeedback } from '../../data/mockData';
import type { LowLevelFeedback } from '../../types/market';
import { DataTable } from '../common/DataTable';
import { SectionCard } from '../common/SectionCard';
import { StatusBadge } from '../common/StatusBadge';

export function LowLevelFeedbackPanel() {
  return (
    <SectionCard
      title="低階代理回饋"
      subtitle="資源代理將實際出力、SOC、偏差與限制狀態回傳至上層平台。"
    >
      <DataTable<LowLevelFeedback>
        data={lowLevelFeedback}
        columns={[
          { header: '代理', accessor: 'agent' },
          { header: '資源', accessor: 'resource' },
          { header: '目標', accessor: 'target', align: 'right' },
          { header: '實際值', accessor: 'actual', align: 'right' },
          { header: 'SOC', accessor: 'soc', align: 'right' },
          { header: '偏差', accessor: 'deviation', align: 'right' },
          { header: '限制狀態', accessor: (row) => <StatusBadge status={row.constraintStatus} /> },
          { header: '回饋訊息', accessor: 'feedbackMessage' },
        ]}
      />
    </SectionCard>
  );
}
