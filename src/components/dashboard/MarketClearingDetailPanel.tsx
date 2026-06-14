import { marketClearingDetail } from '../../data/mockData';
import { SectionCard } from '../common/SectionCard';
import { StatusBadge } from '../common/StatusBadge';

const detailItems = [
  ['交易區間', marketClearingDetail.interval],
  ['清算價格', marketClearingDetail.clearingPrice],
  ['清算成交量', marketClearingDetail.clearedQuantity],
  ['總供給報價量', marketClearingDetail.totalSupplyOffered],
  ['總需求投標量', marketClearingDetail.totalDemandBid],
  ['未滿足需求', marketClearingDetail.unservedDemand],
  ['限發供給', marketClearingDetail.curtailedSupply],
  ['邊際資源', marketClearingDetail.marginalResource],
  ['價格區域', marketClearingDetail.priceRegion],
] as const;

export function MarketClearingDetailPanel() {
  return (
    <SectionCard
      title="市場清算細節"
      subtitle="供調度結果與低階代理使用的單一交易區間清算結果。"
      action={<StatusBadge status={marketClearingDetail.clearingStatus} />}
    >
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {detailItems.map(([label, value]) => (
          <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
            <p className="mt-2 text-lg font-semibold text-slate-950">{value}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
