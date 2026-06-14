import { BidOfferPanel } from '../components/dashboard/BidOfferPanel';
import { DispatchResultPanel } from '../components/dashboard/DispatchResultPanel';
import { LowLevelFeedbackPanel } from '../components/dashboard/LowLevelFeedbackPanel';
import { MarketArchitectureFlow } from '../components/dashboard/MarketArchitectureFlow';
import { MarketClearingDetailPanel } from '../components/dashboard/MarketClearingDetailPanel';
import { MarketDataPanel } from '../components/dashboard/MarketDataPanel';
import { MarketOperationTimeline } from '../components/dashboard/MarketOperationTimeline';
import { MarketResultPanel } from '../components/dashboard/MarketResultPanel';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { ClearingPriceChart } from '../components/charts/ClearingPriceChart';
import { ResourceMixChart } from '../components/charts/ResourceMixChart';
import { SupplyDemandChart } from '../components/charts/SupplyDemandChart';
import { SectionCard } from '../components/common/SectionCard';
import { marketSummary } from '../data/mockData';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-market-blue">
            市場總覽
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-950">
            VPP 上層市場清算、調度與低階代理回饋
          </h2>
        </div>
        <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
          研究節點：VPP-NODE-01
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {marketSummary.map((card) => (
          <SummaryCard key={card.title} item={card} />
        ))}
      </div>

      <MarketOperationTimeline />

      <MarketArchitectureFlow />

      <MarketClearingDetailPanel />

      <BidOfferPanel />

      <div className="grid gap-5 xl:grid-cols-3">
        <SectionCard title="清算價格趨勢" subtitle="最近 5 分鐘區間的市場清算價格。">
          <ClearingPriceChart />
        </SectionCard>
        <SectionCard title="供給 / 需求 / 清算成交量" subtitle="供給報價、需求投標與市場清算量。">
          <SupplyDemandChart />
        </SectionCard>
        <SectionCard title="資源組合" subtitle="依資源類型呈現已清算供給占比。">
          <ResourceMixChart />
        </SectionCard>
      </div>

      <DispatchResultPanel />

      <LowLevelFeedbackPanel />

      <MarketResultPanel />

      <MarketDataPanel />
    </div>
  );
}
