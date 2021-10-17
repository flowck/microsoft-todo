import { ReactChild } from "react";

export interface BaseProps {
  children?: ReactChild | ReactChild[] | null;
}

export enum TaskContainerTypes {
  TASKS = "tasks",
  MYDAY = "myday",
  PLANNED = "planned",
  IMPORTANT = "important",
  ASSIGNED_TO_ME = "assigned_to_me",
}

export type TaskContainerType =
  | TaskContainerTypes.TASKS
  | TaskContainerTypes.MYDAY
  | TaskContainerTypes.PLANNED
  | TaskContainerTypes.IMPORTANT
  | TaskContainerTypes.ASSIGNED_TO_ME;

export interface TaskTypeProp {
  tasksType: TaskContainerType;
}
