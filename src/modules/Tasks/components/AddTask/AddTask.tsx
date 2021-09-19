import { useDispatch } from "react-redux";
import { FormEvent, useState } from "react";
import { Container } from "./AddTaskStyles";
import { Task } from "@/modules/Tasks/store/task";
import { createAction } from "@/common/store/utils";
import AddTaskIcon from "@/common/icons/add-task.svg";
import { NEW_TASK } from "@/modules/Tasks/store/actions";

export function AddTask() {
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const onSubmit = (event: FormEvent) => {
    if (!content) {
      return undefined;
    }

    const task = new Task(content);
    dispatch(createAction<Task>(NEW_TASK, task));

    (event.target as HTMLFormElement).reset();

    event.preventDefault();
  };

  return (
    <Container onSubmit={onSubmit}>
      <img src={AddTaskIcon} alt="Add a task" />
      <input placeholder="Add a task" onInput={(event) => setContent((event.target as HTMLInputElement).value)} />
    </Container>
  );
}
