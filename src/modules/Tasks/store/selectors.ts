import { Task } from "./task";
import { TaskContainerType, TaskContainerTypes } from "@/common/typing/index";

export function selectTasks(tasks: Task[], type: TaskContainerType): Task[] {
  return tasks.filter((task) => {
    const isTasks = type === TaskContainerTypes.TASKS;
    const isMyDay = type === TaskContainerTypes.MYDAY && task.isMyDay;
    const isPlanned = type === TaskContainerTypes.PLANNED && task.isPlanned;
    const isImportant = type === TaskContainerTypes.IMPORTANT && task.isImportant;
    const isAssignedToMe = type === TaskContainerTypes.ASSIGNED_TO_ME && task.isAssignedToMe;

    if (isTasks || isPlanned || isImportant || isAssignedToMe || isMyDay) {
      return true;
    }

    return false;
  });
}
