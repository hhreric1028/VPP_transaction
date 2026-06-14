import { Download } from 'lucide-react';
import { publicDatasets } from '../../data/mockData';
import type { PublicDataset } from '../../types/market';
import { DataTable } from '../common/DataTable';
import { SectionCard } from '../common/SectionCard';

export function PublicMarketDataPanel() {
  const handleDownload = (dataset: string) => {
    console.log(`下載請求：${dataset}`);
  };

  return (
    <SectionCard title="公開市場資料" subtitle="模擬 NEMweb 公開市場資料下載清單。">
      <DataTable<PublicDataset>
        data={publicDatasets}
        columns={[
          { header: '資料集名稱', accessor: 'datasetName' },
          { header: '更新時間', accessor: 'updatedTime' },
          { header: '格式', accessor: 'format', align: 'center' },
          {
            header: '動作',
            accessor: (row) => (
              <button
                onClick={() => handleDownload(row.datasetName)}
                className="inline-flex items-center gap-2 rounded-md bg-market-navy px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-market-blue"
              >
                <Download className="h-3.5 w-3.5" />
                下載
              </button>
            ),
          },
        ]}
      />
    </SectionCard>
  );
}
