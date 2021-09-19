import { Task } from "./task";
import { NEW_TASK } from "./actions";
import { AppAction } from "@/common/store/types";
import { TasksModuleState } from "@/modules/Tasks/store/interfaces";

const defaultState: TasksModuleState = {
  tasks: [],
};

export function tasksReducer(state = defaultState, { payload, type }: AppAction) {
  const reducers = new Map<string, TasksModuleState>();
  reducers.set(NEW_TASK, { ...state, tasks: [...state.tasks, payload as Task] });

  return reducers.get(type) || state;
}
