import { Task } from "./task";
import { AppAction } from "@/common/store/types";
import { TasksModuleState } from "@/modules/Tasks/store/interfaces";
import { UPDATE_TASK, NEW_TASK, SET_ACTIVE_TASK, REMOVE_TASK } from "./actions";

const defaultState: TasksModuleState = {
  tasks: [],
  activeTask: null,
};

export function tasksReducer(state = defaultState, { payload, type }: AppAction) {
  const reducers = new Map<string, TasksModuleState>();
  reducers.set(NEW_TASK, { ...state, tasks: [...state.tasks, payload as Task] });
  reducers.set(UPDATE_TASK, {
    ...state,
    tasks: state.tasks.map((task) => (task.id === (payload as Task).id ? (payload as Task) : task)),
  });
  reducers.set(SET_ACTIVE_TASK, { ...state, activeTask: payload as Task });
  reducers.set(REMOVE_TASK, {
    ...state,
    activeTask: null,
    tasks: state.tasks.filter((task) => task.id !== (payload as number)),
  });

  return reducers.get(type) || state;
}
