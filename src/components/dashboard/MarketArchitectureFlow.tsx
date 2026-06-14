import {
  ArrowRight,
  BatteryCharging,
  DatabaseZap,
  Factory,
  Gauge,
  Landmark,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { SectionCard } from '../common/SectionCard';

const participantGroups = [
  {
    title: '供給端參與者',
    icon: Factory,
    items: ['火力發電機組', '再生能源機組', 'VPP 聚合商'],
  },
  {
    title: '需求端參與者',
    icon: Users,
    items: ['零售商', '大型用戶', '彈性負載'],
  },
  {
    title: '儲能參與者',
    icon: BatteryCharging,
    items: ['電池儲能', '抽蓄水力', '電動車聚合商'],
  },
];

const modules = [
  { title: '市場進入與資料交換', items: ['投標 / 報價上傳'], icon: DatabaseZap },
  { title: '市場清算與價格形成', items: ['市場清算'], icon: Gauge },
  { title: '調度結果發布', items: ['調度指令'], icon: ArrowRight },
  { title: '計量與市場資料回收', items: ['計量資料'], icon: DatabaseZap },
  { title: '結算與信用風險管理', items: ['結算', '信用風險'], icon: ShieldCheck },
];

export function MarketArchitectureFlow() {
  return (
    <SectionCard
      title="高階市場架構流程"
      subtitle="從投標 / 報價申報，到清算、調度、計量、結算與信用風險管理。"
    >
      <div className="grid gap-5 xl:grid-cols-[280px_1fr]">
        <div className="grid gap-3">
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
                    <span
                      key={item}
                      className="rounded-md bg-white px-2.5 py-1 text-xs text-slate-600 ring-1 ring-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid gap-3 md:grid-cols-5">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div key={module.title} className="relative">
                <div className="h-full rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-market-navy text-white">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-900">{module.title}</h3>
                  <div className="mt-3 space-y-2">
                    {module.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-md bg-cyan-50 px-2.5 py-2 text-xs font-medium text-market-cyan"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {index < modules.length - 1 ? (
                  <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-slate-400 md:block" />
                ) : (
                  <Landmark className="absolute right-3 top-3 h-4 w-4 text-slate-300" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}
