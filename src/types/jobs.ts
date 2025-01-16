export type JobType = 'full_time' | 'part_time' | 'contract' | 'temporary';
export type JobStatus = 'draft' | 'published' | 'closed' | 'archived';

export interface Job {
  id: string;
  job_number: string;
  title: string;
  description: string;
  organization_id: string;
  type: JobType;
  location: string;
  salary_range?: string;
  requirements?: string;
  benefits?: string;
  notes?: string;
  status: JobStatus;
  deadline: Date;
  created_at?: Date;
  updated_at?: Date;
}