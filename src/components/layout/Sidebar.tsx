import {
  BarChart3,
  ClipboardList,
  Database,
  Gauge,
  Landmark,
  LineChart,
  ShieldAlert,
  Zap,
} from 'lucide-react';

const menuItems = [
  { label: '市場總覽', icon: BarChart3, active: true },
  { label: '投標 / 報價', icon: ClipboardList },
  { label: '市場清算', icon: LineChart },
  { label: '調度發布', icon: Zap },
  { label: '計量資料', icon: Gauge },
  { label: '結算管理', icon: Landmark },
  { label: '信用風險', icon: ShieldAlert },
  { label: '公開市場資料', icon: Database },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="border-b border-slate-200 px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">市場入口</p>
        <p className="mt-2 text-sm font-medium text-slate-700">交易營運控制台</p>
      </div>
      <nav className="space-y-1 p-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium transition ${
                item.active
                  ? 'bg-market-navy text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-market-navy'
              }`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="m-4 rounded-lg border border-cyan-100 bg-cyan-50 p-4 text-sm text-slate-700">
        <p className="font-semibold text-market-navy">目前交易區間</p>
        <p className="mt-1 text-slate-500">5 分鐘調度與結算預覽</p>
      </div>
    </aside>
  );
}
