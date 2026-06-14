import { Bell, Clock3, Server } from 'lucide-react';
import { currentInterval, marketStatus, mode } from '../../data/mockData';
import { StatusBadge } from '../common/StatusBadge';

export function TopHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-gradient-to-r from-market-navy via-market-indigo to-slate-950 text-white">
      <div className="flex min-h-20 flex-col gap-3 px-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
            VPP 高階交易平台
          </p>
          <h1 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
            NEM-inspired 市場清算與調度儀表板
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="flex items-center gap-2 rounded-md border border-white/15 bg-white/8 px-3 py-2">
            <Clock3 className="h-4 w-4 text-cyan-200" />
            <span>目前區間：{currentInterval}</span>
          </div>
          <StatusBadge status={marketStatus} />
          <div className="flex items-center gap-2 rounded-md border border-white/15 bg-white/8 px-3 py-2">
            <Server className="h-4 w-4 text-cyan-200" />
            <span>{mode}</span>
          </div>
          <button
            aria-label="通知"
            className="rounded-md border border-white/15 bg-white/8 p-2 transition hover:bg-white/15"
          >
            <Bell className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
