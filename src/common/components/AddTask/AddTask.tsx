import AddTaskIcon from "@/common/icons/add-task.svg";
import { Container } from "./AddTaskStyles";

export function AddTask() {
  return (
    <Container>
      <img src={AddTaskIcon} alt="Add a task" />
      <input placeholder="Add a task" />
    </Container>
  );
}
