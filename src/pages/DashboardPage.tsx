import { BidOfferPanel } from '../components/dashboard/BidOfferPanel';
import { DispatchResultPanel } from '../components/dashboard/DispatchResultPanel';
import { MarketArchitectureFlow } from '../components/dashboard/MarketArchitectureFlow';
import { PublicMarketDataPanel } from '../components/dashboard/PublicMarketDataPanel';
import { SettlementRiskPanel } from '../components/dashboard/SettlementRiskPanel';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { ClearingPriceChart } from '../components/charts/ClearingPriceChart';
import { ResourceMixChart } from '../components/charts/ResourceMixChart';
import { SupplyDemandChart } from '../components/charts/SupplyDemandChart';
import { SectionCard } from '../components/common/SectionCard';
import { summaryCards } from '../data/mockData';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-market-blue">
            市場總覽
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-950">交易、調度與信用風險控制室</h2>
        </div>
        <div className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
          區域：NEM-style VPP 聚合節點
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        {summaryCards.map((card) => (
          <SummaryCard key={card.title} item={card} />
        ))}
      </div>

      <MarketArchitectureFlow />

      <BidOfferPanel />

      <div className="grid gap-5 xl:grid-cols-3">
        <SectionCard title="清算價格趨勢" subtitle="最近 12 個 5 分鐘交易區間。">
          <ClearingPriceChart />
        </SectionCard>
        <SectionCard title="供需平衡" subtitle="供給報價、需求投標與市場成交量。" className="xl:col-span-1">
          <SupplyDemandChart />
        </SectionCard>
        <SectionCard title="資源組合" subtitle="依資源類型顯示已清算供給占比。">
          <ResourceMixChart />
        </SectionCard>
      </div>

      <DispatchResultPanel />

      <SettlementRiskPanel />

      <PublicMarketDataPanel />
    </div>
  );
}
