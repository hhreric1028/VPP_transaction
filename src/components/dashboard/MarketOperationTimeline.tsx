import { operationSteps } from '../../data/mockData';
import { SectionCard } from '../common/SectionCard';
import { StatusBadge } from '../common/StatusBadge';

export function MarketOperationTimeline() {
  return (
    <SectionCard
      title="市場運作時序"
      subtitle="目前區間從投標接收、清算、調度到低階代理回饋的處理流程。"
    >
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-6">
        {operationSteps.map((step) => (
          <div key={step.stepName} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <div className="flex items-start justify-between gap-2">
              <p className="text-sm font-semibold text-slate-900">{step.stepName}</p>
              <StatusBadge status={step.status} />
            </div>
            <p className="mt-2 text-xs font-semibold text-market-blue">{step.timestamp}</p>
            <p className="mt-2 text-xs leading-5 text-slate-500">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
