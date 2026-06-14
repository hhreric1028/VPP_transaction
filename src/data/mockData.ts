import {
  Activity,
  BatteryCharging,
  ChartCandlestick,
  Gauge,
  RadioTower,
  Users,
} from 'lucide-react';
import type {
  BalancePoint,
  DemandBid,
  DispatchResult,
  LowLevelFeedback,
  MarketClearingDetail,
  MarketDataFile,
  MarketResult,
  MarketStatus,
  MarketSummary,
  OperationStep,
  PricePoint,
  ResourceMixPoint,
  SupplyOffer,
} from '../types/market';

export const currentInterval = '14:35';
export const mode = '模擬模式';

export const totalSupplyOffered = 142.5;
export const totalDemandBid = 128.2;
export const clearedQuantity = 126.8;
export const netImbalance = 1.4;

export const getMarketStatus = (supply: number, demand: number): MarketStatus => {
  const gap = Math.abs(supply - demand);
  if (gap < 5) return 'Normal';
  if (gap <= 15) return 'Imbalance';
  return 'Re-dispatch Required';
};

export const marketStatus = getMarketStatus(128.2, 126.8);

export const marketSummary: MarketSummary[] = [
  {
    title: '清算價格',
    value: '86.4 $/MWh',
    subtitle: '市場清算價格',
    status: 'Completed',
    icon: ChartCandlestick,
  },
  {
    title: '清算成交量',
    value: '126.8 MWh',
    subtitle: '供需撮合成交量',
    status: 'Completed',
    icon: Activity,
  },
  {
    title: '總供給報價量',
    value: '142.5 MWh',
    subtitle: '可用發電與放電量',
    status: 'Completed',
    icon: RadioTower,
  },
  {
    title: '總需求投標量',
    value: '128.2 MWh',
    subtitle: '需求用電與充電量',
    status: 'Completed',
    icon: Gauge,
  },
  {
    title: '淨不平衡量',
    value: '1.4 MWh',
    subtitle: '未滿足需求或剩餘供給',
    status: 'Running',
    icon: BatteryCharging,
  },
  {
    title: '活躍參與者',
    value: '12',
    subtitle: '供給、需求與儲能資源',
    status: 'Completed',
    icon: Users,
  },
];

export const operationSteps: OperationStep[] = [
  {
    stepName: '投標 / 報價已接收',
    status: 'Completed',
    timestamp: '14:30',
    description: '已接收供給報價、需求投標與儲能可用量。',
  },
  {
    stepName: '報價驗證',
    status: 'Completed',
    timestamp: '14:31',
    description: '已檢查電量、價格與可行性限制。',
  },
  {
    stepName: '市場清算',
    status: 'Completed',
    timestamp: '14:33',
    description: '已完成目前區間的供需撮合。',
  },
  {
    stepName: '價格形成',
    status: 'Completed',
    timestamp: '14:34',
    description: '已選定邊際資源並形成清算價格。',
  },
  {
    stepName: '調度結果發布',
    status: 'Running',
    timestamp: '14:35',
    description: '調度目標已送至低階資源代理。',
  },
  {
    stepName: '代理回饋接收',
    status: 'Warning',
    timestamp: '14:35',
    description: 'PV 出力低於預測，重新調度檢查仍在進行。',
  },
];

export const marketClearingDetail: MarketClearingDetail = {
  interval: '14:35',
  clearingPrice: '86.4 $/MWh',
  clearedQuantity: '126.8 MWh',
  totalSupplyOffered: '142.5 MWh',
  totalDemandBid: '128.2 MWh',
  unservedDemand: '1.4 MWh',
  curtailedSupply: '15.7 MWh',
  marginalResource: 'VPP_Agg1',
  priceRegion: 'VPP-NODE-01',
  clearingStatus: 'Completed',
};

export const supplyOffers: SupplyOffer[] = [
  {
    participant: 'Thermal_G1',
    resourceType: '火力',
    availableVolume: '45 MWh',
    offerPrice: '72 $/MWh',
    clearedVolume: '42 MWh',
    dispatchTarget: '42 MWh',
    status: 'Cleared',
  },
  {
    participant: 'Solar_PV1',
    resourceType: '再生能源',
    availableVolume: '38 MWh',
    offerPrice: '18 $/MWh',
    clearedVolume: '36 MWh',
    dispatchTarget: '36 MWh',
    status: 'Cleared',
  },
  {
    participant: 'Battery_B1',
    resourceType: '儲能',
    availableVolume: '20 MWh',
    offerPrice: '95 $/MWh',
    clearedVolume: '12 MWh',
    dispatchTarget: '-12 MWh',
    status: 'Partially Cleared',
  },
  {
    participant: 'VPP_Agg1',
    resourceType: 'VPP',
    availableVolume: '25 MWh',
    offerPrice: '88 $/MWh',
    clearedVolume: '24 MWh',
    dispatchTarget: '24 MWh',
    status: 'Cleared',
  },
];

export const demandBids: DemandBid[] = [
  {
    participant: 'Retailer_R1',
    loadType: '零售商 / 買方',
    bidVolume: '52 MWh',
    bidPrice: '120 $/MWh',
    clearedVolume: '50 MWh',
    responseTarget: '-50 MWh',
    status: 'Cleared',
  },
  {
    participant: 'Industrial_L1',
    loadType: '大型負載',
    bidVolume: '35 MWh',
    bidPrice: '105 $/MWh',
    clearedVolume: '35 MWh',
    responseTarget: '-35 MWh',
    status: 'Cleared',
  },
  {
    participant: 'FlexLoad_D1',
    loadType: '彈性負載',
    bidVolume: '18 MWh',
    bidPrice: '82 $/MWh',
    clearedVolume: '8 MWh',
    responseTarget: '-8 MWh',
    status: 'Partially Cleared',
  },
  {
    participant: 'Battery_B1',
    loadType: '儲能充電',
    bidVolume: '16 MWh',
    bidPrice: '45 $/MWh',
    clearedVolume: '0 MWh',
    responseTarget: '-12 MWh',
    status: 'Warning',
  },
];

export const dispatchResults: DispatchResult[] = [
  {
    resource: 'Thermal_G1',
    resourceType: '火力',
    dispatchTarget: '42 MWh',
    actualOutput: '41.5 MWh',
    deviation: '-0.5',
    instruction: '提高出力',
    status: 'Normal',
  },
  {
    resource: 'Solar_PV1',
    resourceType: '再生能源',
    dispatchTarget: '36 MWh',
    actualOutput: '34.8 MWh',
    deviation: '-1.2',
    instruction: '依預測出力',
    status: 'Warning',
  },
  {
    resource: 'Battery_B1',
    resourceType: '儲能',
    dispatchTarget: '-12 MWh',
    actualOutput: '-11.6 MWh',
    deviation: '0.4',
    instruction: '充電',
    status: 'Normal',
  },
  {
    resource: 'Industrial_L1',
    resourceType: '負載',
    dispatchTarget: '-35 MWh',
    actualOutput: '-34.6 MWh',
    deviation: '0.4',
    instruction: '依排程用電',
    status: 'Normal',
  },
  {
    resource: 'VPP_Agg1',
    resourceType: 'VPP',
    dispatchTarget: '24 MWh',
    actualOutput: '23.2 MWh',
    deviation: '-0.8',
    instruction: '調度聚合式 DER',
    status: 'Normal',
  },
];

export const lowLevelFeedback: LowLevelFeedback[] = [
  {
    agent: 'GeneratorAgent_G1',
    resource: 'Thermal_G1',
    target: '42 MWh',
    actual: '41.5 MWh',
    soc: '-',
    deviation: '-0.5',
    constraintStatus: 'Normal',
    feedbackMessage: '爬坡限制符合要求',
  },
  {
    agent: 'RenewableAgent_PV1',
    resource: 'Solar_PV1',
    target: '36 MWh',
    actual: '34.8 MWh',
    soc: '-',
    deviation: '-1.2',
    constraintStatus: 'Warning',
    feedbackMessage: 'PV 出力低於預測',
  },
  {
    agent: 'BatteryAgent_B1',
    resource: 'Battery_B1',
    target: '-12 MWh',
    actual: '-11.6 MWh',
    soc: '64%',
    deviation: '0.4',
    constraintStatus: 'Normal',
    feedbackMessage: '充電狀態符合 SOC 範圍',
  },
  {
    agent: 'LoadAgent_L1',
    resource: 'Industrial_L1',
    target: '-35 MWh',
    actual: '-34.6 MWh',
    soc: '-',
    deviation: '0.4',
    constraintStatus: 'Normal',
    feedbackMessage: '負載回應已接受',
  },
  {
    agent: 'VPPAggregator_A1',
    resource: 'VPP_Agg1',
    target: '24 MWh',
    actual: '23.2 MWh',
    soc: '-',
    deviation: '-0.8',
    constraintStatus: 'Normal',
    feedbackMessage: '聚合式 DER 已調度',
  },
];

export const clearingPriceTrend: PricePoint[] = [
  { interval: '13:40', price: 72 },
  { interval: '13:45', price: 75 },
  { interval: '13:50', price: 81 },
  { interval: '13:55', price: 79 },
  { interval: '14:00', price: 88 },
  { interval: '14:05', price: 91 },
  { interval: '14:10', price: 86 },
  { interval: '14:15', price: 84 },
  { interval: '14:20', price: 89 },
  { interval: '14:25', price: 93 },
  { interval: '14:30', price: 87 },
  { interval: '14:35', price: 86.4 },
];

export const supplyDemandBalance: BalancePoint[] = [
  { interval: '13:40', supply: 132, demand: 120, cleared: 118 },
  { interval: '13:45', supply: 136, demand: 123, cleared: 121 },
  { interval: '13:50', supply: 139, demand: 126, cleared: 124 },
  { interval: '13:55', supply: 135, demand: 125, cleared: 123 },
  { interval: '14:00', supply: 143, demand: 130, cleared: 127 },
  { interval: '14:05', supply: 147, demand: 132, cleared: 129 },
  { interval: '14:10', supply: 141, demand: 128, cleared: 126 },
  { interval: '14:15', supply: 140, demand: 126, cleared: 125 },
  { interval: '14:20', supply: 145, demand: 130, cleared: 128 },
  { interval: '14:25', supply: 148, demand: 134, cleared: 130 },
  { interval: '14:30', supply: 144, demand: 129, cleared: 127 },
  { interval: '14:35', supply: 142.5, demand: 128.2, cleared: 126.8 },
];

export const resourceMix: ResourceMixPoint[] = [
  { name: '火力', value: 35, color: '#22345f' },
  { name: '再生能源', value: 30, color: '#0f8b6f' },
  { name: '儲能', value: 16, color: '#7c3aed' },
  { name: 'VPP 聚合', value: 19, color: '#0e7490' },
];

export const marketResult: MarketResult = {
  summary: [
    { label: '市場總收益', value: '$10,955', tone: 'neutral' },
    { label: '總發電成本', value: '$7,840', tone: 'neutral' },
    { label: '市場淨剩餘', value: '$3,115', tone: 'good' },
    { label: '未滿足需求罰金', value: '$1,400', tone: 'warning' },
    { label: '限發電量', value: '15.7 MWh', tone: 'neutral' },
    { label: '調度偏差', value: '3.4 MWh', tone: 'warning' },
  ],
  chartData: [
    { name: '收益', value: 10955 },
    { name: '發電成本', value: 7840 },
    { name: '罰金', value: 1400 },
    { name: '淨剩餘', value: 3115 },
  ],
};

export const marketDataFiles: MarketDataFile[] = [
  {
    dataset: 'CLEARING_PRICE',
    process: '市場清算',
    interval: '5-min',
    updatedAt: '14:35',
    format: 'CSV',
  },
  {
    dataset: 'BID_OFFER_SUMMARY',
    process: '投標 / 報價',
    interval: '5-min',
    updatedAt: '14:35',
    format: 'CSV',
  },
  {
    dataset: 'DISPATCH_TARGET',
    process: '調度',
    interval: '5-min',
    updatedAt: '14:35',
    format: 'CSV',
  },
  {
    dataset: 'AGENT_FEEDBACK',
    process: '低階代理回饋',
    interval: '5-min',
    updatedAt: '14:35',
    format: 'CSV',
  },
  {
    dataset: 'MARKET_RESULT',
    process: '市場結果',
    interval: '5-min',
    updatedAt: '14:35',
    format: 'CSV',
  },
];
