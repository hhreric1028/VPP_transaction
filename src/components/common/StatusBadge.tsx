import type {
  ClearingStatus,
  ConstraintStatus,
  DispatchStatus,
  MarketStatus,
  OperationStatus,
} from '../../types/market';

type StatusBadgeProps = {
  status: MarketStatus | OperationStatus | ClearingStatus | DispatchStatus | ConstraintStatus;
};

const statusStyles: Record<string, string> = {
  Normal: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Imbalance: 'bg-amber-50 text-amber-700 ring-amber-200',
  'Re-dispatch Required': 'bg-rose-50 text-rose-700 ring-rose-200',
  Completed: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Running: 'bg-blue-50 text-blue-700 ring-blue-200',
  Pending: 'bg-slate-100 text-slate-600 ring-slate-200',
  Warning: 'bg-amber-50 text-amber-700 ring-amber-200',
  Cleared: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  'Partially Cleared': 'bg-amber-50 text-amber-700 ring-amber-200',
  'Not Cleared': 'bg-slate-100 text-slate-600 ring-slate-200',
  Constraint: 'bg-rose-50 text-rose-700 ring-rose-200',
};

const statusLabels: Record<string, string> = {
  Normal: '正常',
  Imbalance: '供需不平衡',
  'Re-dispatch Required': '需要重新調度',
  Completed: '已完成',
  Running: '執行中',
  Pending: '待處理',
  Warning: '警示',
  Cleared: '已清算',
  'Partially Cleared': '部分清算',
  'Not Cleared': '未清算',
  Constraint: '受限制',
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${
        statusStyles[status] ?? statusStyles.Normal
      }`}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-current" />
      {statusLabels[status] ?? status}
    </span>
  );
}
