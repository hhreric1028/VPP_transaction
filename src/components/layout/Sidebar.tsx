import {
  BarChart3,
  ClipboardList,
  Database,
  LineChart,
  RadioTower,
  Route,
  Users,
} from 'lucide-react';

const menuItems = [
  { label: '市場總覽', icon: BarChart3, active: true },
  { label: '市場參與者', icon: Users },
  { label: '投標 / 報價', icon: ClipboardList },
  { label: '市場清算', icon: LineChart },
  { label: '調度結果', icon: Route },
  { label: '代理回饋', icon: RadioTower },
  { label: '市場資料', icon: Database },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white lg:block">
      <div className="border-b border-slate-200 px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">研究平台</p>
        <p className="mt-2 text-sm font-medium text-slate-700">VPP 交易模型</p>
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
        <p className="font-semibold text-market-navy">目前研究重點</p>
        <p className="mt-1 text-slate-500">投標 / 報價清算、調度與代理回饋迴圈。</p>
      </div>
    </aside>
  );
}
