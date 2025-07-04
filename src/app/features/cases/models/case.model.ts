export interface Donation {
  amount: number;
  date: string;
}

export interface Case {
  caseNumber: number;
  title: string;
  startDate: string;
  expectedAmount: number | null;
  collectedAmount: number;
  handler: string;
  status: string;
  donations: Donation[];
}
