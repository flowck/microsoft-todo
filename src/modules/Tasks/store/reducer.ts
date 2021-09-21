import { Task } from "./task";
import { AppAction } from "@/common/store/types";
import { UPDATE_TASK, NEW_TASK } from "./actions";
import { TasksModuleState } from "@/modules/Tasks/store/interfaces";

const defaultState: TasksModuleState = {
  tasks: [],
};

export function tasksReducer(state = defaultState, { payload, type }: AppAction) {
  const reducers = new Map<string, TasksModuleState>();
  reducers.set(NEW_TASK, { ...state, tasks: [...state.tasks, payload as Task] });
  reducers.set(UPDATE_TASK, {
    ...state,
    tasks: state.tasks.map((task) => (task.id === (payload as Task).id ? (payload as Task) : task)),
  });

  return reducers.get(type) || state;
}
