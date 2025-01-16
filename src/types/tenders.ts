export type TenderCategory = 'construction' | 'it' | 'supplies' | 'services';
export type TenderStatus = 'draft' | 'published' | 'closed' | 'archived';
export type SubmissionStatus = 'pending' | 'accepted' | 'rejected';

export interface Tender {
  id: string;
  tender_number: string;
  title: string;
  description: string;
  organization_id: string;
  category: TenderCategory;
  budget: number;
  document: string;
  notes: string[];
  status: TenderStatus;
  submission_deadline: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface TenderSubmission {
  id: string;
  tender_id: string;
  user_id: string;
  technical_file_url: string[];
  financial_file_url: string;
  bank_guarantee_url: string;
  bank_guarantee_number: string;
  bank_guarantee_date: Date;
  status: SubmissionStatus;
  submission_date: Date;
  technical_score?: number;
  financial_score?: number;
  notes?: string;
  user?: {
    name: string;
    company: string;
  };
}