import type { ReactNode } from 'react';

type Column<T> = {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  align?: 'left' | 'right' | 'center';
};

type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export function DataTable<T extends object>({ columns, data }: DataTableProps<T>) {
  const alignment = {
    left: 'text-left',
    right: 'text-right',
    center: 'text-center',
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className={`px-4 py-3 font-semibold uppercase tracking-wide text-slate-500 ${
                  alignment[column.align ?? 'left']
                }`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {data.map((row, index) => (
            <tr key={index} className="transition-colors hover:bg-slate-50">
              {columns.map((column) => {
                const value =
                  typeof column.accessor === 'function'
                    ? column.accessor(row)
                    : (row[column.accessor] as ReactNode);

                return (
                  <td
                    key={column.header}
                    className={`whitespace-nowrap px-4 py-3 text-slate-700 ${
                      alignment[column.align ?? 'left']
                    }`}
                  >
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
