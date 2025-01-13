export interface Project {
  id: string;
  project_number: string;
  title: string;
  image_paths: string[];
  description: string;
  owner_id: string;
  contractor_id: string;
  location: string;
  budget: number;
  status: 'planning' | 'active' | 'completed' | 'cancelled';
  type: string;
  start_date: Date;
  end_date: Date;
  progress: number;
  team: string[];
  risks: string[];
  financial_details: string[];
  expected_outcomes: string[];
  reports: string[];
  tools: string[];
  notes: string[];
  created_at: Date;
  updated_at: Date;
}

export interface ProjectUpdate {
  id: string;
  project_id: string;
  image_paths: string[];
  title: string;
  description: string;
  progress: number;
  update_date: Date;
}