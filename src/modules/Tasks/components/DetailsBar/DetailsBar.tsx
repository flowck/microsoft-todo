import { RootState } from "@/store";
import { useSelector } from "react-redux";
import Trash from "@/common/icons/trash.svg";
import * as DateUtil from "@/common/utils/dates";
import { Task } from "@/modules/Tasks/store/task";
import ArrowClose from "@/common/icons/arrow-close.svg";
import { Container, DetailsContent, DetailsFooter } from "@/modules/Tasks/components/DetailsBar/DetailsBarStyles";

interface Props {
  onClose(): void;
}

export function DetailsBar({ onClose }: Props) {
  const task = useSelector<RootState, Task | null>(({ tasksModule }) => tasksModule.activeTask);
  const createdAt = DateUtil.format(task?.createdAt);

  return (
    <Container>
      <DetailsContent></DetailsContent>
      <DetailsFooter>
        <button type="button" onClick={onClose}>
          <img src={ArrowClose} alt="Close" />
        </button>
        <span>Created {createdAt}</span>
        <button type="button">
          <img src={Trash} alt="Remove task" />
        </button>
      </DetailsFooter>
    </Container>
  );
}
