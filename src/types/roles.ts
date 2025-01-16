export type Permission = 
  | 'manage_users'
  | 'manage_roles'
  | 'manage_departments'
  | 'view_data'
  | 'edit_data'
  | 'add_users'
  | 'delete_users';

export type RoleType = 'admin' | 'department_manager' | 'supervisor';

export interface Role {
  id: string;
  name: string;
  type: RoleType;
  permissions: Permission[];
  created_at: string;
  updated_at: string;
}

export interface UserRole {
  id: string;
  user_id: string;
  role_id: string;
  department_id?: string;
  created_at: string;
}