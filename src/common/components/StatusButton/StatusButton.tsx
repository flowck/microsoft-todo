import { MouseEvent } from "react";
import Check from "@/common/icons/check.svg";
import { BaseProps, TaskContainerType } from "@/common/typing";
import { StatusButtonContainer } from "@/common/components/StatusButton/StatusButtonStyles";

interface Props extends BaseProps {
  size: string;
  onClick(): void;
  isComplete: boolean;
  tasksType: TaskContainerType;
}

export function StatusButton({ onClick, isComplete, size, tasksType }: Props) {
  const handleClick = (event: MouseEvent) => {
    event.stopPropagation();

    onClick();
  };

  return (
    <StatusButtonContainer
      size={size}
      tasksType={tasksType}
      onClick={handleClick}
      className={isComplete ? "status-button--complete" : ""}
    >
      {isComplete ? <img src={Check} alt="Status" /> : null}
    </StatusButtonContainer>
  );
}
