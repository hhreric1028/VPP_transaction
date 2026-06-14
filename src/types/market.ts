import type { LucideIcon } from 'lucide-react';

export type MarketStatus = 'Normal' | 'Imbalance' | 'Re-dispatch Required';
export type OperationStatus = 'Completed' | 'Running' | 'Pending' | 'Warning';
export type ClearingStatus = 'Cleared' | 'Partially Cleared' | 'Not Cleared' | 'Warning';
export type DispatchStatus = 'Normal' | 'Warning' | 'Re-dispatch Required';
export type ConstraintStatus = 'Normal' | 'Warning' | 'Constraint';

export interface OperationStep {
  stepName: string;
  status: OperationStatus;
  timestamp: string;
  description: string;
}

export interface MarketSummary {
  title: string;
  value: string;
  subtitle: string;
  status: MarketStatus | OperationStatus;
  icon: LucideIcon;
}

export interface MarketClearingDetail {
  interval: string;
  clearingPrice: string;
  clearedQuantity: string;
  totalSupplyOffered: string;
  totalDemandBid: string;
  unservedDemand: string;
  curtailedSupply: string;
  marginalResource: string;
  priceRegion: string;
  clearingStatus: OperationStatus;
}

export interface SupplyOffer {
  participant: string;
  resourceType: string;
  availableVolume: string;
  offerPrice: string;
  clearedVolume: string;
  dispatchTarget: string;
  status: ClearingStatus;
}

export interface DemandBid {
  participant: string;
  loadType: string;
  bidVolume: string;
  bidPrice: string;
  clearedVolume: string;
  responseTarget: string;
  status: ClearingStatus;
}

export interface DispatchResult {
  resource: string;
  resourceType: string;
  dispatchTarget: string;
  actualOutput: string;
  deviation: string;
  instruction: string;
  status: DispatchStatus;
}

export interface LowLevelFeedback {
  agent: string;
  resource: string;
  target: string;
  actual: string;
  soc: string;
  deviation: string;
  constraintStatus: ConstraintStatus;
  feedbackMessage: string;
}

export interface PricePoint {
  interval: string;
  price: number;
}

export interface BalancePoint {
  interval: string;
  supply: number;
  demand: number;
  cleared: number;
}

export interface ResourceMixPoint {
  name: string;
  value: number;
  color: string;
}

export interface MarketResultMetric {
  label: string;
  value: string;
  tone: 'neutral' | 'good' | 'warning';
}

export interface MarketResultChartPoint {
  name: string;
  value: number;
}

export interface MarketResult {
  summary: MarketResultMetric[];
  chartData: MarketResultChartPoint[];
}

export interface MarketDataFile {
  dataset: string;
  process: string;
  interval: string;
  updatedAt: string;
  format: 'CSV';
}
