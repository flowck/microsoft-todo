import { createContext } from "react";
import { TaskContainerTypes } from "@/common/typing";

export const TasksContext = createContext({
  tasksType: TaskContainerTypes.TASKS,
});
