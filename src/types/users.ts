export type UserRole = 'admin' | 'user';
export type UserType = 'individual' | 'company';
export type UserStatus = 'active' | 'inactive' | 'suspended';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  photo_url?: string;
  role: UserRole;
  type: UserType;
  status: UserStatus;
  created_at: string;
  updated_at: string;
  last_login?: string;
}

export interface IndividualProfile {
  id: string;
  user_id: string;
  national_id: string;
  date_of_birth?: string;
  address?: string;
  city?: string;
  occupation?: string;
  education_level?: string;
  created_at: string;
}

export interface IndividualUser extends User {
  profile: IndividualProfile;
}