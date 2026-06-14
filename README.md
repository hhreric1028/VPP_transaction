# VPP Central Market Platform Dashboard

NEM-style VPP High-level Trading Platform Dashboard prototype.

This project is a front-end-only visual dashboard for a high-level Virtual Power Plant market platform inspired by the Australian NEM / AEMO market structure. It uses mock data to demonstrate bid / offer submission, market clearing, dispatch, metering, settlement, prudential risk, and public market data workflows.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Lucide React icons

## Features

- AEMO / NEM-style dark market portal header
- Left sidebar for market operations sections
- Market status summary cards
- High-level VPP market architecture flow
- Supply offer and demand bid tables
- Clearing price trend chart
- Supply / demand / cleared quantity chart
- Cleared resource mix donut chart
- Dispatch result table
- Settlement and prudential risk panel
- NEMweb-style public market data list
- Responsive layout
- Mock data managed centrally in `src/data/mockData.ts`

## Project Structure

```text
src/
├─ components/
│  ├─ layout/
│  │  ├─ AppLayout.tsx
│  │  ├─ TopHeader.tsx
│  │  └─ Sidebar.tsx
│  ├─ dashboard/
│  │  ├─ SummaryCard.tsx
│  │  ├─ MarketArchitectureFlow.tsx
│  │  ├─ BidOfferPanel.tsx
│  │  ├─ DispatchResultPanel.tsx
│  │  ├─ SettlementRiskPanel.tsx
│  │  └─ PublicMarketDataPanel.tsx
│  ├─ charts/
│  │  ├─ ClearingPriceChart.tsx
│  │  ├─ SupplyDemandChart.tsx
│  │  ├─ ResourceMixChart.tsx
│  │  └─ PrudentialTrendChart.tsx
│  └─ common/
│     ├─ StatusBadge.tsx
│     ├─ SectionCard.tsx
│     └─ DataTable.tsx
├─ data/
│  └─ mockData.ts
├─ types/
│  └─ market.ts
├─ pages/
│  └─ DashboardPage.tsx
├─ App.tsx
├─ main.tsx
└─ styles.css
```

## Installation

On Windows PowerShell, use `npm.cmd` if `npm.ps1` is blocked by execution policy:

```bash
npm.cmd install
```

On other shells:

```bash
npm install
```

## Development

```bash
npm.cmd run dev
```

or:

```bash
npm run dev
```

Default local URL:

```text
http://127.0.0.1:5173
```

## Production Build

```bash
npm.cmd run build
```

or:

```bash
npm run build
```

## Notes

- This prototype does not include authentication, authorization, backend APIs, databases, WebSocket connections, file upload, or real NEM data integration.
- All market, dispatch, settlement, and public dataset values are mock data.
- The market status badge is derived from trading margin:
  - `> 30000`: Normal
  - `10000 - 30000`: Warning
  - `< 10000`: Critical

