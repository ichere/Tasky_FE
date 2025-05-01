export interface Task {
  _id: string;
  name: string;
  description: string;
  budget: number;
  claimedBy?: string;
}