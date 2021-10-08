import { Task } from "./task";

export interface TasksModuleState {
  tasks: Task[];
  activeTask: Task | null;
}
