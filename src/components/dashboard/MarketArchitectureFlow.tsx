import { ArrowRight, BatteryCharging, Cpu, DatabaseZap, Factory, Gauge, RadioTower, Users } from 'lucide-react';
import { SectionCard } from '../common/SectionCard';

const participantGroups = [
  {
    title: '供給端',
    icon: Factory,
    items: ['火力發電機組', '再生能源機組', 'VPP 聚合商'],
  },
  {
    title: '需求端',
    icon: Users,
    items: ['零售商 / 買方', '大型負載', '彈性負載'],
  },
  {
    title: '儲能端',
    icon: BatteryCharging,
    items: ['電池儲能', '電動車聚合商'],
  },
];

const platformModules = [
  '投標 / 報價收集',
  '可行性檢查',
  '市場清算',
  '價格形成',
  '調度分配',
  '市場結果發布',
];

const agents = ['發電機組代理', '再生能源代理', '電池代理', '負載代理', 'VPP 聚合代理'];

export function MarketArchitectureFlow() {
  return (
    <SectionCard
      title="VPP 上層交易架構"
      subtitle="市場參與者提交投標與報價，平台完成市場清算，低階代理回傳實際運轉回饋。"
    >
      <div className="grid gap-5 xl:grid-cols-[280px_1fr_280px]">
        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">市場參與者</div>
          {participantGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-market-navy">
                  <Icon className="h-4 w-4" />
                  {group.title}
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-md bg-white px-2.5 py-1 text-xs text-slate-600 ring-1 ring-slate-200">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-market-navy">
            <DatabaseZap className="h-4 w-4" />
            上層市場平台
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {platformModules.map((module) => (
              <div key={module} className="rounded-lg border border-cyan-100 bg-cyan-50 px-3 py-3 text-sm font-medium text-market-cyan">
                {module}
              </div>
            ))}
          </div>
          <div className="mt-4 grid gap-3 text-xs text-slate-600 md:grid-cols-3">
            <div className="rounded-md bg-slate-50 p-3">
              <RadioTower className="mb-2 h-4 w-4 text-market-blue" />
              參與者提交投標、報價與可用量。
            </div>
            <div className="rounded-md bg-slate-50 p-3">
              <Gauge className="mb-2 h-4 w-4 text-market-blue" />
              平台輸出清算價格與調度目標。
            </div>
            <div className="rounded-md bg-slate-50 p-3">
              <Cpu className="mb-2 h-4 w-4 text-market-blue" />
              代理回傳出力、SOC、偏差與限制狀態。
            </div>
          </div>
          <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-slate-400 xl:block" />
        </div>

        <div className="space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">低階代理</div>
          {agents.map((agent) => (
            <div key={agent} className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-700">
              {agent}
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
