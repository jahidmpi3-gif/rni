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
  points?: number; // Total points earned (for Officers)
}

export interface TaskLog {
  id: string;
  action: string;
  timestamp: string;
  user: string;
}

export interface TaskAttachment {
  id: string;
  name: string;
  url: string;
  uploadedAt: string;
  uploadedBy: string;
}

export interface TaskExtension {
  id: string;
  extraTime: number; // in minutes
  reason: string;
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
  estimatedDuration?: string; // Original estimated duration
  executionTime?: number; // Officer assigned execution time in minutes
  extensions?: TaskExtension[];
  pausedAt?: string; // Timestamp when task was put on hold
  totalHoldTime?: number; // Total time spent on hold in minutes
  actualCompletionTime?: string;
  taskTakenTime?: string;
  attachments?: TaskAttachment[];
}

export interface Notification {
  id: string;
  userId: string;
  message: string;
  type: 'TASK_ASSIGNED' | 'TASK_COMPLETED' | 'SYSTEM';
  read: boolean;
  timestamp: string;
  taskId?: string;
}

export interface Attendance {
  id: string;
  technicianId: string;
  status: 'PRESENT' | 'ABSENT' | 'LEAVE' | 'SHORT_LEAVE';
  date: string;
  leaveMinutes?: number; // For short leave
}
