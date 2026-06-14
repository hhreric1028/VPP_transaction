import type { LucideIcon } from 'lucide-react';

export type MarketStatus = 'Normal' | 'Warning' | 'Critical';
export type ClearingStatus = 'Cleared' | 'Partially Cleared' | 'Not Cleared';
export type OperationalStatus = 'Normal' | 'Warning' | 'Critical';

export interface MarketSummary {
  title: string;
  value: string;
  subtitle: string;
  status: MarketStatus;
  icon: LucideIcon;
}

export interface SupplyOffer {
  participant: string;
  type: string;
  offerVolume: string;
  offerPrice: string;
  status: ClearingStatus;
}

export interface DemandBid {
  participant: string;
  type: string;
  bidVolume: string;
  bidPrice: string;
  status: ClearingStatus;
}

export interface DispatchResult {
  resource: string;
  dispatchTarget: string;
  actualOutput: string;
  deviation: string;
  instruction: string;
  status: OperationalStatus;
}

export interface PricePoint {
  time: string;
  price: number;
}

export interface BalancePoint {
  time: string;
  supply: number;
  demand: number;
  cleared: number;
}

export interface ResourceMix {
  name: string;
  value: number;
  color: string;
}

export interface PrudentialParameter {
  label: string;
  value: string;
  tone: 'neutral' | 'good' | 'warning';
}

export interface PrudentialTrendPoint {
  day: string;
  outstandings: number;
  tradingLimit: number;
  creditSupport: number;
}

export interface PublicDataset {
  datasetName: string;
  updatedTime: string;
  format: 'CSV';
}
