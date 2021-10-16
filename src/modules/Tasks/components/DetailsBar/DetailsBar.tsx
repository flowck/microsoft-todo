import { RootState } from "@/store";
import { Icons } from "@/common/icons";
import { TaskItem } from "../TaskItem/TaskItem";
import * as DateUtil from "@/common/utils/dates";
import { Step } from "@/modules/Tasks/store/step";
import { ListSteps } from "../ListSteps/ListSteps";
import { Task } from "@/modules/Tasks/store/task";
import { createAction } from "@/common/store/utils";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useEffect, useRef, useState } from "react";
import { REMOVE_TASK, UPDATE_TASK } from "@/modules/Tasks/store/actions";
import {
  Container,
  AddStepForm,
  AddNoteInput,
  DetailsIcon,
  DetailsItems,
  DetailsFooter,
  DetailsContent,
  StepsContainer,
} from "@/modules/Tasks/components/DetailsBar/DetailsBarStyles";
const { AddIcon, ArrowCloseIcon, TrashIcon } = Icons;

interface Props {
  onClose(): void;
}

export function DetailsBar({ onClose }: Props) {
  const dispatch = useDispatch();
  const [step, setStep] = useState("");
  const task = useSelector<RootState, Task | null>(({ tasksModule }) => tasksModule.activeTask);
  const createdAt = DateUtil.format(task?.createdAt);
  const noteTextAreaElement = useRef(null);

  useEffect(() => {
    if (noteTextAreaElement.current && task) {
      (noteTextAreaElement.current as HTMLTextAreaElement).value = task.note;
    }
  }, [task]);

  const updateTask = (_task?: Task) => {
    dispatch(createAction<Task>(UPDATE_TASK, _task || (task as Task)));
  };

  const removeTask = () => {
    onClose();
    dispatch(createAction<number>(REMOVE_TASK, task?.id));
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
          {/* <li>
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
          </li> */}
          <li>
            <AddNoteInput
              placeholder="Add Note"
              onInput={updateTaskNote}
              ref={noteTextAreaElement}
              onBlur={() => updateTask()}
            />
          </li>
        </DetailsItems>
      </DetailsContent>
      <DetailsFooter>
        <button type="button" onClick={onClose}>
          <img src={ArrowCloseIcon} alt="Close" />
        </button>
        <span>Created {createdAt}</span>
        <button type="button" onClick={removeTask}>
          <img src={TrashIcon} alt="Remove task" />
        </button>
      </DetailsFooter>
    </Container>
  );
}
