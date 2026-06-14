import { demandBids, supplyOffers } from '../../data/mockData';
import type { DemandBid, SupplyOffer } from '../../types/market';
import { DataTable } from '../common/DataTable';
import { SectionCard } from '../common/SectionCard';
import { StatusBadge } from '../common/StatusBadge';

export function BidOfferPanel() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <SectionCard title="供給端報價" subtitle="發電、儲能放電與 VPP 聚合資源報價。">
        <DataTable<SupplyOffer>
          data={supplyOffers}
          columns={[
            { header: '參與者', accessor: 'participant' },
            { header: '類型', accessor: 'type' },
            { header: '報價電量', accessor: 'offerVolume', align: 'right' },
            { header: '報價價格', accessor: 'offerPrice', align: 'right' },
            { header: '狀態', accessor: (row) => <StatusBadge status={row.status} /> },
          ]}
        />
      </SectionCard>
      <SectionCard title="需求端投標" subtitle="零售商、大型用戶與彈性負載投標。">
        <DataTable<DemandBid>
          data={demandBids}
          columns={[
            { header: '參與者', accessor: 'participant' },
            { header: '類型', accessor: 'type' },
            { header: '投標電量', accessor: 'bidVolume', align: 'right' },
            { header: '投標價格', accessor: 'bidPrice', align: 'right' },
            { header: '狀態', accessor: (row) => <StatusBadge status={row.status} /> },
          ]}
        />
      </SectionCard>
    </div>
  );
}
