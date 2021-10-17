import { TaskContainerType, TaskContainerTypes } from "@/common/typing/index";

export function getMainColor(type: TaskContainerType) {
  const map: Record<TaskContainerType, string> = {
    [TaskContainerTypes.MYDAY]: "#ffffff",
    [TaskContainerTypes.TASKS]: "#778bdd",
    [TaskContainerTypes.PLANNED]: "#8bd3ce",
    [TaskContainerTypes.IMPORTANT]: "#f5b6c2",
    [TaskContainerTypes.ASSIGNED_TO_ME]: "#9ad2ba",
  };

  return map[type] || "#778bdd";
}
