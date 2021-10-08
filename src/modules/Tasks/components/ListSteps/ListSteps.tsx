import { Step } from "@/modules/Tasks/store/step";
import RemoveIcon from "@/common/icons/remove.svg";
import { Container, RemoveButton } from "./ListStepsStyles";
import { StatusButton } from "@/common/components/StatusButton/StatusButton";

interface Props {
  steps: Step[];
  onRemoveStep(steps: Step[]): void;
  onToggleStatus(steps: Step[]): void;
}

export function ListSteps({ steps, onRemoveStep, onToggleStatus }: Props) {
  const removeStep = (index: number) => {
    const _steps = steps.filter((step, _index) => _index !== index);
    onRemoveStep(_steps);
  };

  const toggleStatus = (index: number) => {
    const _steps = steps.map((step, _index) => {
      if (_index === index) {
        step.isComplete = !step.isComplete;
      }

      return step;
    });
    onToggleStatus(_steps);
  };

  const renderSteps = () => {
    return steps.map((step, index) => (
      <li key={index}>
        <StatusButton size="14px" isComplete={step.isComplete} onClick={() => toggleStatus(index)} />

        <span>{step.content}</span>

        <RemoveButton type="button" onClick={() => removeStep(index)}>
          <img src={RemoveIcon} alt="Remove" />
        </RemoveButton>
      </li>
    ));
  };

  return <Container>{renderSteps()}</Container>;
}
