# VPP 高階交易平台儀表板

這是一個研究用的前端視覺化原型，用來展示 VPP 上層交易平台的市場清算、價格形成、調度結果與低階代理回饋流程。

本專案不是完整商業交易平台，也不是完整 AEMO 系統；重點放在研究模型中的高階市場平台如何接收 bid / offer、完成清算、產生調度結果，並接收 low-level agents 的實際運轉回饋。

## 技術棧

- React
- TypeScript
- Vite
- Tailwind CSS
- Recharts
- Lucide React icons

## 功能

- NEM-inspired 深色市場平台 header
- 聚焦交易、清算、調度、代理回饋與市場資料輸出的 sidebar
- 根據供需差距判斷市場狀態
- 清算價格、清算成交量、供給、需求、不平衡量與活躍參與者摘要卡
- 從投標 / 報價接收到低階代理回饋的市場運作時序
- 連結市場參與者、上層平台模組與低階代理的架構流程圖
- 市場清算細節面板
- 供給端報價與需求端投標表格
- 清算價格、供需平衡、資源組合與市場結果圖表
- 調度結果表格
- 低階代理回饋表格
- 簡化市場結果面板
- 市場資料輸出表格

## 專案結構

```text
src/
├─ components/
│  ├─ layout/
│  │  ├─ AppLayout.tsx
│  │  ├─ TopHeader.tsx
│  │  └─ Sidebar.tsx
│  ├─ dashboard/
│  │  ├─ SummaryCard.tsx
│  │  ├─ MarketOperationTimeline.tsx
│  │  ├─ MarketArchitectureFlow.tsx
│  │  ├─ MarketClearingDetailPanel.tsx
│  │  ├─ BidOfferPanel.tsx
│  │  ├─ DispatchResultPanel.tsx
│  │  ├─ LowLevelFeedbackPanel.tsx
│  │  ├─ MarketResultPanel.tsx
│  │  └─ MarketDataPanel.tsx
│  ├─ charts/
│  │  ├─ ClearingPriceChart.tsx
│  │  ├─ SupplyDemandChart.tsx
│  │  ├─ ResourceMixChart.tsx
│  │  └─ MarketResultChart.tsx
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

## 安裝

Windows PowerShell 若因 execution policy 擋住 `npm.ps1`，請使用：

```bash
npm.cmd install
```

其他 shell 可使用：

```bash
npm install
```

## 開發執行

```bash
npm.cmd run dev
```

或：

```bash
npm run dev
```

預設本機網址：

```text
http://127.0.0.1:5173
```

## Production Build

```bash
npm.cmd run build
```

或：

```bash
npm run build
```

## 備註

- 本原型不包含登入、權限、後端 API、資料庫、WebSocket、檔案上傳或真實 NEM 資料串接。
- 所有市場參與者、投標 / 報價、清算、調度、回饋、結果與市場資料皆為 mock data。
- 市場狀態依供需差距判斷：
  - `< 5 MWh`：Normal
  - `5-15 MWh`：Imbalance
  - `> 15 MWh`：Re-dispatch Required

