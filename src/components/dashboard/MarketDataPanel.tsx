import { Download } from 'lucide-react';
import { marketDataFiles } from '../../data/mockData';
import type { MarketDataFile } from '../../types/market';
import { DataTable } from '../common/DataTable';
import { SectionCard } from '../common/SectionCard';

export function MarketDataPanel() {
  const handleDownload = (dataset: string) => {
    console.log(`下載資料集：${dataset}`);
  };

  return (
    <SectionCard title="市場資料" subtitle="研究平台在目前交易區間輸出的資料檔案。">
      <DataTable<MarketDataFile>
        data={marketDataFiles}
        columns={[
          { header: '資料集', accessor: 'dataset' },
          { header: '流程', accessor: 'process' },
          { header: '區間', accessor: 'interval', align: 'center' },
          { header: '更新時間', accessor: 'updatedAt', align: 'center' },
          { header: '格式', accessor: 'format', align: 'center' },
          {
            header: '動作',
            accessor: (row) => (
              <button
                onClick={() => handleDownload(row.dataset)}
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
