
export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export type CampaignStatus = 'active' | 'paused' | 'pending' | 'rejected' | 'completed';
export type PropertyStatus = 'approved' | 'pending' | 'rejected' | 'disabled';
export type WithdrawalStatus = 'completed' | 'pending' | 'processing' | 'failed';

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  format: string;
  geo: string[];
  bid: number;
  dailyBudget: number;
  totalBudget: number;
  spend: number;
  ctr: number;
  createdAt: string;
}

export interface Property {
  id: string;
  name: string;
  url: string;
  category: string;
  status: PropertyStatus;
  createdAt: string;
}

export interface AdUnit {
  id: string;
  name: string;
  propertyId: string;
  format: string;
  status: 'active' | 'inactive';
  ecpm: number;
  revenue: number;
}

export interface Transaction {
  id: string;
  type: 'deposit' | 'spend' | 'bonus' | 'refund' | 'withdrawal' | 'earning';
  amount: number;
  method?: string;
  status: 'completed' | 'pending' | 'failed' | 'processing';
  date: string;
}

export interface AdFormat {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}
