import { marketResult } from '../../data/mockData';
import { MarketResultChart } from '../charts/MarketResultChart';
import { SectionCard } from '../common/SectionCard';

const toneStyles = {
  neutral: 'bg-slate-50 text-slate-900 ring-slate-200',
  good: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  warning: 'bg-amber-50 text-amber-700 ring-amber-200',
};

export function MarketResultPanel() {
  return (
    <SectionCard
      title="簡化市場結果"
      subtitle="研究用市場結果摘要，呈現清算、調度、罰金與市場剩餘。"
    >
      <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          {marketResult.summary.map((item) => (
            <div key={item.label} className={`rounded-lg px-4 py-3 ring-1 ${toneStyles[item.tone]}`}>
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{item.label}</p>
              <p className="mt-1 text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="min-h-[320px] rounded-lg border border-slate-200 bg-slate-50 p-4">
          <MarketResultChart />
        </div>
      </div>
    </SectionCard>
  );
}
