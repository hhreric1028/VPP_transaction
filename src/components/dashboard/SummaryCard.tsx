import type { MarketSummary } from '../../types/market';
import { StatusBadge } from '../common/StatusBadge';

type SummaryCardProps = {
  item: MarketSummary;
};

export function SummaryCard({ item }: SummaryCardProps) {
  const Icon = item.icon;

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-panel">
      <div className="flex items-start justify-between gap-3">
        <div className="rounded-md bg-slate-100 p-2 text-market-blue">
          <Icon className="h-5 w-5" />
        </div>
        <StatusBadge status={item.status} />
      </div>
      <p className="mt-4 text-sm font-medium text-slate-500">{item.title}</p>
      <p className="mt-2 text-2xl font-semibold text-slate-950">{item.value}</p>
      <p className="mt-1 text-xs text-slate-500">{item.subtitle}</p>
    </article>
  );
}
