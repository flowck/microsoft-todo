import Check from "@/common/icons/check.svg";
import { BaseProps } from "@/common/interfaces";
import { Container } from "@/common/components/StatusButton/StatusButtonStyles";

interface Props extends BaseProps {
  size: string;
  onClick(): void;
  isComplete: boolean;
}

export function StatusButton({ onClick, isComplete, size }: Props) {
  return (
    <Container size={size} onClick={onClick} className={isComplete ? "status-button--complete" : ""}>
      {isComplete ? <img src={Check} alt="Status" /> : null}
    </Container>
  );
}
