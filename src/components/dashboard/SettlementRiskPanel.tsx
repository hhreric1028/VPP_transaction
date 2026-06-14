import { prudentialParameters } from '../../data/mockData';
import { PrudentialTrendChart } from '../charts/PrudentialTrendChart';
import { SectionCard } from '../common/SectionCard';

const toneStyles = {
  neutral: 'bg-slate-50 text-slate-900 ring-slate-200',
  good: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  warning: 'bg-amber-50 text-amber-700 ring-amber-200',
};

export function SettlementRiskPanel() {
  return (
    <SectionCard
      title="結算與信用風險"
      subtitle="以 NEM-style 信用風險儀表板風格呈現信用支援、交易上限與未結清金額。"
    >
      <div className="grid gap-5 xl:grid-cols-[360px_1fr]">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
          {prudentialParameters.map((item) => (
            <div
              key={item.label}
              className={`rounded-lg px-4 py-3 ring-1 ${toneStyles[item.tone]}`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide opacity-70">{item.label}</p>
              <p className="mt-1 text-xl font-semibold">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="min-h-[320px] rounded-lg border border-slate-200 bg-slate-50 p-4">
          <PrudentialTrendChart />
        </div>
      </div>
    </SectionCard>
  );
}
