import { RawTask } from "./task";
import { RootState } from "@/store";
import { TasksModuleState } from "./interfaces";
import { createTransform } from "redux-persist";
import { Task } from "@/modules/Tasks/store/task";

const outbound = (state: TasksModuleState) => {
  const tasks = state.tasks.map((task) => Task.create(task as unknown as RawTask));
  return { ...state, tasks };
};

const inbound = (state: RootState) => {
  return { ...state };
};

export const tasksModuleTransformer = createTransform(inbound, outbound, { whitelist: ["tasksModule"] });
