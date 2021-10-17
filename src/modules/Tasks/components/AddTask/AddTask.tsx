import { useDispatch } from "react-redux";
import { Container } from "./AddTaskStyles";
import { Task } from "@/modules/Tasks/store/task";
import { AddIcon } from "@/common/icons/AddIcon";
import { getMainColor } from "../../utils/colors";
import { createAction } from "@/common/store/utils";
import { NEW_TASK } from "@/modules/Tasks/store/actions";
import { FormEvent, useContext, useState } from "react";
import { TasksContext } from "@/modules/Tasks/containers/TasksContext";

export function AddTask() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const { tasksType } = useContext(TasksContext);

  const onSubmit = (event: FormEvent) => {
    if (!content) {
      return undefined;
    }

    const task = new Task(content, tasksType);
    dispatch(createAction<Task>(NEW_TASK, task));

    (event.target as HTMLFormElement).reset();

    event.preventDefault();
  };

  return (
    <Container tasksType={tasksType} data-testid="addTaskForm" onSubmit={onSubmit}>
      <AddIcon color={getMainColor(tasksType)}></AddIcon>
      <input
        placeholder="Add a task"
        data-testid="addTaskInput"
        onInput={(event) => setContent((event.target as HTMLInputElement).value)}
      />
    </Container>
  );
}
