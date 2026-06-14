import { demandBids, supplyOffers } from '../../data/mockData';
import type { DemandBid, SupplyOffer } from '../../types/market';
import { DataTable } from '../common/DataTable';
import { SectionCard } from '../common/SectionCard';
import { StatusBadge } from '../common/StatusBadge';

export function BidOfferPanel() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <SectionCard title="供給端報價" subtitle="發電、儲能放電與 VPP 資源報價。">
        <DataTable<SupplyOffer>
          data={supplyOffers}
          columns={[
            { header: '參與者', accessor: 'participant' },
            { header: '資源類型', accessor: 'resourceType' },
            { header: '可用電量', accessor: 'availableVolume', align: 'right' },
            { header: '報價價格', accessor: 'offerPrice', align: 'right' },
            { header: '清算電量', accessor: 'clearedVolume', align: 'right' },
            { header: '調度目標', accessor: 'dispatchTarget', align: 'right' },
            { header: '狀態', accessor: (row) => <StatusBadge status={row.status} /> },
          ]}
        />
      </SectionCard>
      <SectionCard title="需求端投標" subtitle="買方需求、大型負載、彈性負載與充電投標。">
        <DataTable<DemandBid>
          data={demandBids}
          columns={[
            { header: '參與者', accessor: 'participant' },
            { header: '負載類型', accessor: 'loadType' },
            { header: '投標電量', accessor: 'bidVolume', align: 'right' },
            { header: '投標價格', accessor: 'bidPrice', align: 'right' },
            { header: '清算電量', accessor: 'clearedVolume', align: 'right' },
            { header: '回應目標', accessor: 'responseTarget', align: 'right' },
            { header: '狀態', accessor: (row) => <StatusBadge status={row.status} /> },
          ]}
        />
      </SectionCard>
    </div>
  );
}
