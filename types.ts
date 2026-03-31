export type Role = 
  | 'SUPER_ADMIN' 
  | 'HOD' 
  | 'IN_CHARGE' 
  | 'MODEL_MANAGER' 
  | 'ENGINEER' 
  | 'OFFICER' 
  | 'TECHNICIAN';

export type Urgency = 'REGULAR' | 'URGENT' | 'MOST_URGENT';
export type TaskStatus = 'PENDING' | 'RUNNING' | 'COMPLETED' | 'DELAYED' | 'HOLD' | 'REQUESTED' | 'REJECTED';

export interface User {
  id: string;
  employeeId: string;
  name: string;
  role: Role;
  department?: string;
  avatar?: string;
  supervisorId?: string;
  assignedEngineers?: string[]; // Array of Engineer employeeIds
  phone?: string;
  designation?: string;
  email?: string;
  theme?: string;
  customBackground?: string;
}

export interface TaskLog {
  id: string;
  action: string;
  timestamp: string;
  user: string;
}

export interface Task {
  id: string;
  taskId: string;
  title: string;
  model: string;
  details: string;
  urgency: Urgency;
  createdBy: string;
  assignedBy: string;
  assignedTo: string; // Officer or Technician
  status: TaskStatus;
  progress: number;
  points?: number; // Performance points
  quality?: number; // 1-5 scale
  deadline: string;
  remarks?: string;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  logs: TaskLog[];
  requestStatus?: 'PENDING' | 'APPROVED' | 'REJECTED';
  requestRemarks?: string;
  customStartTime?: string;
  estimatedDuration?: string;
  actualCompletionTime?: string;
  taskTakenTime?: string;
}

export interface Attendance {
  id: string;
  technicianId: string;
  status: 'PRESENT' | 'ABSENT' | 'LEAVE' | 'SHORT_LEAVE';
  date: string;
}
