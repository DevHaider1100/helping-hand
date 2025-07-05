export interface ZakatDonationReport {
  sr: number;
  name: string;
  type: string;
  date: string;
  amount: number;
}

export interface DistributionReport {
  sr: number;
  name: string;
  purpose: string;
  quantity: number | string;
  priceMU: number;
  discount: number;
  type: string;
  notes: string;
  amount: number;
}

export interface RationFlourReport {
  sr: number;
  name: string;
  item: string;
  quantity: number;
}
