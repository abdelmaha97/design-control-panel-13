export type ResultType = "tender" | "auction" | "job";
export type ResultStatus = "draft" | "published" | "archived";

export interface Result {
  id: string;
  type: ResultType;
  image_path?: string;
  title: string;
  description: string;
  entity: string;
  location?: string;
  date: Date;
  selection_method: string;
  criteria: string;
  amount?: number;
  winner?: string;
  notes?: string;
  selected_candidates?: Record<string, any>;
  status: ResultStatus;
  created_at: Date;
  updated_at: Date;
}