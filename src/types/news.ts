export type NewsType = 'news' | 'event';
export type NewsStatus = 'draft' | 'published' | 'archived';

export interface News {
  id: string;
  type: NewsType;
  title: string;
  content: string;
  image_url?: string;
  author_id?: string;
  published_at?: Date;
  status: NewsStatus;
  created_at: Date;
  updated_at: Date;
}