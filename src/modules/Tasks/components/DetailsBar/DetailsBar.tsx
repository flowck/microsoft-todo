import { FormEvent } from "react";
import { RootState } from "@/store";
import Trash from "@/common/icons/trash.svg";
import AddIcon from "@/common/icons/add.svg";
import SunIcon from "@/common/icons/sun.svg";
import BellIcon from "@/common/icons/bell.svg";
import ClipIcon from "@/common/icons/clip.svg";
import * as DateUtil from "@/common/utils/dates";
import { Task } from "@/modules/Tasks/store/task";
import RepeatIcon from "@/common/icons/repeat.svg";
import { createAction } from "@/common/store/utils";
import CalendarIcon from "@/common/icons/calendar.svg";
import { useDispatch, useSelector } from "react-redux";
import ArrowClose from "@/common/icons/arrow-close.svg";
import { UPDATE_TASK } from "@/modules/Tasks/store/actions";
import {
  Container,
  AddNoteForm,
  DetailsFooter,
  DetailsContent,
} from "@/modules/Tasks/components/DetailsBar/DetailsBarStyles";
import { TaskItem } from "../TaskItem/TaskItem";

interface Props {
  onClose(): void;
}

export function DetailsBar({ onClose }: Props) {
  const dispatch = useDispatch();
  const task = useSelector<RootState, Task | null>(({ tasksModule }) => tasksModule.activeTask);
  const createdAt = DateUtil.format(task?.createdAt);

  const updateTask = (_task?: Task) => {
    dispatch(createAction<Task>(UPDATE_TASK, _task || (task as Task)));
  };

  const updateTaskNote = (event: FormEvent) => {
    const target = event.target as HTMLTextAreaElement;

    if (task) {
      task.note = target.value;
    }
  };

  return (
    <Container>
      <DetailsContent>
        {task ? <TaskItem isDetails={true} task={task} onTaskUpdate={(_task) => updateTask(_task)} /> : null}
        <ul>
          <li>
            <img src={AddIcon} alt="Add step" />
            Add Step
          </li>
          <li>
            <img src={SunIcon} alt="Add to my day" />
            Add to My Day
          </li>
          <li>
            <img src={BellIcon} alt="Remind Me" />
            Remind Me
          </li>
          <li>
            <img src={CalendarIcon} alt="Add Due Date" />
            Add Due Date
          </li>
          <li>
            <img src={RepeatIcon} alt="" />
            Repeat
          </li>
          <li>
            <img src={ClipIcon} alt="Add File" />
            Add File
          </li>
          <li>
            <AddNoteForm onSubmit={() => updateTask}>
              <textarea onBlur={() => updateTask} onInput={updateTaskNote} placeholder="Add Note" value={task?.note} />
            </AddNoteForm>
          </li>
        </ul>
      </DetailsContent>
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
