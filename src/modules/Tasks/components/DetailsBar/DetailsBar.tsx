import { RootState } from "@/store";
import { FormEvent, useState } from "react";
import Trash from "@/common/icons/trash.svg";
import SunIcon from "@/common/icons/sun.svg";
import BellIcon from "@/common/icons/bell.svg";
import ClipIcon from "@/common/icons/clip.svg";
import { TaskItem } from "../TaskItem/TaskItem";
import * as DateUtil from "@/common/utils/dates";
import { Step } from "@/modules/Tasks/store/step";
import { ListSteps } from "../ListSteps/ListSteps";
import AddIcon from "@/common/icons/add-task.svg";
import { Task } from "@/modules/Tasks/store/task";
import RepeatIcon from "@/common/icons/repeat.svg";
import { createAction } from "@/common/store/utils";
import CalendarIcon from "@/common/icons/calendar.svg";
import { useDispatch, useSelector } from "react-redux";
import ArrowClose from "@/common/icons/arrow-close.svg";
import { UPDATE_TASK } from "@/modules/Tasks/store/actions";
import {
  Container,
  AddStepForm,
  AddNoteForm,
  DetailsIcon,
  DetailsItems,
  DetailsFooter,
  DetailsContent,
  StepsContainer,
} from "@/modules/Tasks/components/DetailsBar/DetailsBarStyles";

interface Props {
  onClose(): void;
}

export function DetailsBar({ onClose }: Props) {
  const dispatch = useDispatch();
  const [step, setStep] = useState("");
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

  const onInputStep = (event: FormEvent) => {
    setStep((event.target as HTMLInputElement).value);
  };

  const onSubmitStep = (event: FormEvent) => {
    if (task) {
      task.steps.push(new Step(step));
      setStep("");
      updateTask();
    }

    event.preventDefault();
  };

  const onStepsUpdate = (steps: Step[]) => {
    if (task) {
      task.steps = steps;
      dispatch(createAction<Task>(UPDATE_TASK, task));
    }
  };

  return (
    <Container>
      <DetailsContent>
        {task ? <TaskItem isDetails={true} task={task} onTaskUpdate={(_task) => updateTask(_task)} /> : null}
        <DetailsItems>
          <li>
            <StepsContainer>
              {task?.steps.length ? (
                <ListSteps onRemoveStep={onStepsUpdate} onToggleStatus={onStepsUpdate} steps={task.steps} />
              ) : null}
              <AddStepForm onSubmit={onSubmitStep}>
                <DetailsIcon src={AddIcon} alt="Add step" />
                <input value={step} type="text" placeholder="Add step" onInput={onInputStep} />
              </AddStepForm>
            </StepsContainer>
          </li>
          <li>
            <DetailsIcon src={SunIcon} alt="Add to my day" />
            Add to My Day
          </li>
          <li>
            <DetailsIcon src={BellIcon} alt="Remind Me" />
            Remind Me
          </li>
          <li>
            <DetailsIcon src={CalendarIcon} alt="Add Due Date" />
            Add Due Date
          </li>
          <li>
            <DetailsIcon src={RepeatIcon} alt="" />
            Repeat
          </li>
          <li>
            <DetailsIcon src={ClipIcon} alt="Add File" />
            Add File
          </li>
          <li>
            <AddNoteForm onSubmit={() => updateTask}>
              <textarea onBlur={() => updateTask} onInput={updateTaskNote} placeholder="Add Note" value={task?.note} />
            </AddNoteForm>
          </li>
        </DetailsItems>
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
