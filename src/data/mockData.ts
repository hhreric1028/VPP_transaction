import {
  Activity,
  BatteryCharging,
  ChartCandlestick,
  CircleDollarSign,
  Factory,
  Gauge,
} from 'lucide-react';
import type {
  BalancePoint,
  DemandBid,
  DispatchResult,
  MarketStatus,
  MarketSummary,
  PricePoint,
  PrudentialParameter,
  PrudentialTrendPoint,
  PublicDataset,
  ResourceMix,
  SupplyOffer,
} from '../types/market';

export const tradingMargin = 888300;

export const getMarketStatus = (margin: number): MarketStatus => {
  if (margin > 630000) return 'Normal';
  if (margin >= 210000) return 'Warning';
  return 'Critical';
};

export const marketTime = '2026-06-14 12:35 台灣時間';

export const summaryCards: MarketSummary[] = [
  {
    title: '目前清算價格',
    value: 'NT$1,814/MWh',
    subtitle: '5 分鐘交易區間價格',
    status: 'Normal',
    icon: ChartCandlestick,
  },
  {
    title: '總供給報價量',
    value: '142.5 MWh',
    subtitle: '發電 + 儲能放電',
    status: 'Normal',
    icon: Factory,
  },
  {
    title: '總需求投標量',
    value: '128.2 MWh',
    subtitle: '零售商 + 彈性負載',
    status: 'Normal',
    icon: Gauge,
  },
  {
    title: '已清算成交量',
    value: '126.8 MWh',
    subtitle: '市場撮合成交量',
    status: 'Normal',
    icon: Activity,
  },
  {
    title: '電池淨部位',
    value: '-12.5 MWh',
    subtitle: '負值代表充電',
    status: 'Warning',
    icon: BatteryCharging,
  },
  {
    title: '交易餘額',
    value: 'NT$888,300',
    subtitle: '觸發風險前可用額度',
    status: getMarketStatus(tradingMargin),
    icon: CircleDollarSign,
  },
];

export const supplyOffers: SupplyOffer[] = [
  {
    participant: 'Thermal_G1',
    type: '火力',
    offerVolume: '45 MWh',
    offerPrice: 'NT$1,512/MWh',
    status: 'Cleared',
  },
  {
    participant: 'Solar_PV1',
    type: '再生能源',
    offerVolume: '38 MWh',
    offerPrice: 'NT$378/MWh',
    status: 'Cleared',
  },
  {
    participant: 'Battery_B1',
    type: '儲能',
    offerVolume: '20 MWh',
    offerPrice: 'NT$1,995/MWh',
    status: 'Partially Cleared',
  },
  {
    participant: 'VPP_Agg1',
    type: 'VPP',
    offerVolume: '25 MWh',
    offerPrice: 'NT$1,848/MWh',
    status: 'Cleared',
  },
];

export const demandBids: DemandBid[] = [
  {
    participant: 'Retailer_R1',
    type: '零售商',
    bidVolume: '52 MWh',
    bidPrice: 'NT$2,520/MWh',
    status: 'Cleared',
  },
  {
    participant: 'Industrial_L1',
    type: '大型負載',
    bidVolume: '35 MWh',
    bidPrice: 'NT$2,205/MWh',
    status: 'Cleared',
  },
  {
    participant: 'FlexLoad_D1',
    type: '需量反應',
    bidVolume: '18 MWh',
    bidPrice: 'NT$1,722/MWh',
    status: 'Partially Cleared',
  },
  {
    participant: 'Battery_B1',
    type: '儲能充電',
    bidVolume: '16 MWh',
    bidPrice: 'NT$945/MWh',
    status: 'Not Cleared',
  },
];

export const priceTrend: PricePoint[] = [
  { time: '11:40', price: 1512 },
  { time: '11:45', price: 1575 },
  { time: '11:50', price: 1701 },
  { time: '11:55', price: 1659 },
  { time: '12:00', price: 1848 },
  { time: '12:05', price: 1911 },
  { time: '12:10', price: 1806 },
  { time: '12:15', price: 1764 },
  { time: '12:20', price: 1869 },
  { time: '12:25', price: 1953 },
  { time: '12:30', price: 1827 },
  { time: '12:35', price: 1806 },
];

export const balanceTrend: BalancePoint[] = [
  { time: '11:40', supply: 132, demand: 120, cleared: 118 },
  { time: '11:45', supply: 136, demand: 123, cleared: 121 },
  { time: '11:50', supply: 139, demand: 126, cleared: 124 },
  { time: '11:55', supply: 135, demand: 125, cleared: 123 },
  { time: '12:00', supply: 143, demand: 130, cleared: 127 },
  { time: '12:05', supply: 147, demand: 132, cleared: 129 },
  { time: '12:10', supply: 141, demand: 128, cleared: 126 },
  { time: '12:15', supply: 140, demand: 126, cleared: 125 },
  { time: '12:20', supply: 145, demand: 130, cleared: 128 },
  { time: '12:25', supply: 148, demand: 134, cleared: 130 },
  { time: '12:30', supply: 144, demand: 129, cleared: 127 },
  { time: '12:35', supply: 143, demand: 128, cleared: 127 },
];

export const resourceMix: ResourceMix[] = [
  { name: '火力', value: 35, color: '#22345f' },
  { name: '再生能源', value: 30, color: '#0f8b6f' },
  { name: '儲能', value: 16, color: '#7c3aed' },
  { name: 'VPP 聚合商', value: 19, color: '#0e7490' },
];

export const dispatchResults: DispatchResult[] = [
  {
    resource: 'Thermal_G1',
    dispatchTarget: '42 MWh',
    actualOutput: '41.5 MWh',
    deviation: '-0.5',
    instruction: '提高出力',
    status: 'Normal',
  },
  {
    resource: 'Solar_PV1',
    dispatchTarget: '36 MWh',
    actualOutput: '34.8 MWh',
    deviation: '-1.2',
    instruction: '依預測出力',
    status: 'Warning',
  },
  {
    resource: 'Battery_B1',
    dispatchTarget: '-12 MWh',
    actualOutput: '-11.6 MWh',
    deviation: '0.4',
    instruction: '充電',
    status: 'Normal',
  },
  {
    resource: 'VPP_Agg1',
    dispatchTarget: '24 MWh',
    actualOutput: '23.2 MWh',
    deviation: '-0.8',
    instruction: '調度聚合式 DER',
    status: 'Normal',
  },
  {
    resource: 'FlexLoad_D1',
    dispatchTarget: '-8 MWh',
    actualOutput: '-7.5 MWh',
    deviation: '0.5',
    instruction: '降低需求',
    status: 'Normal',
  },
];

export const prudentialParameters: PrudentialParameter[] = [
  { label: '信用支援', value: 'NT$5,250,000', tone: 'neutral' },
  { label: '交易上限', value: 'NT$4,410,000', tone: 'neutral' },
  { label: '未結清金額', value: 'NT$3,521,700', tone: 'warning' },
  { label: '交易餘額', value: 'NT$888,300', tone: 'good' },
  { label: '典型應計金額', value: 'NT$3,318,000', tone: 'neutral' },
  { label: '結算預估', value: 'NT$655,200', tone: 'neutral' },
];

export const prudentialTrend: PrudentialTrendPoint[] = [
  { day: '週一', outstandings: 2898000, tradingLimit: 4410000, creditSupport: 5250000 },
  { day: '週二', outstandings: 3234000, tradingLimit: 4410000, creditSupport: 5250000 },
  { day: '週三', outstandings: 3087000, tradingLimit: 4410000, creditSupport: 5250000 },
  { day: '週四', outstandings: 3696000, tradingLimit: 4410000, creditSupport: 5250000 },
  { day: '週五', outstandings: 3381000, tradingLimit: 4410000, creditSupport: 5250000 },
  { day: '週六', outstandings: 3864000, tradingLimit: 4410000, creditSupport: 5250000 },
  { day: '週日', outstandings: 3521700, tradingLimit: 4410000, creditSupport: 5250000 },
];

export const publicDatasets: PublicDataset[] = [
  { datasetName: '最新調度價格 CSV', updatedTime: '2026-06-14 12:35 台灣時間', format: 'CSV' },
  { datasetName: '投標 / 報價彙總 CSV', updatedTime: '2026-06-14 12:30 台灣時間', format: 'CSV' },
  { datasetName: '調度目標 CSV', updatedTime: '2026-06-14 12:35 台灣時間', format: 'CSV' },
  { datasetName: '結算預估 CSV', updatedTime: '2026-06-14 12:20 台灣時間', format: 'CSV' },
  { datasetName: '資源可用量 CSV', updatedTime: '2026-06-14 12:25 台灣時間', format: 'CSV' },
];
