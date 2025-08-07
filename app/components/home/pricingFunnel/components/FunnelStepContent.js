import {
  TeamSizeStep,
  ProjectComplexityStep,
  BudgetStep,
  TimelineStep,
  SupportLevelStep,
} from "./steps";

import { usePricingFunnel } from "../context/PricingFunnelContext";
import { useStepNavigation } from "../hooks/useStepNavigation";

export default function FunnelStepContent({
  question,
  stepNumber,
  totalSteps,
}) {
  const { state } = usePricingFunnel();
  const { handleAnswer } = useStepNavigation();

  const stepComponents = {
    team_size: TeamSizeStep,
    project_complexity: ProjectComplexityStep,
    budget: BudgetStep,
    timeline: TimelineStep,
    support_level: SupportLevelStep,
  };

  const StepComponent = stepComponents[question.id];

  if (!StepComponent) {
    return <div>Unknown step</div>;
  }

  return (
    <StepComponent
      question={question}
      onAnswer={(value) => handleAnswer(question.id, value)}
      currentAnswer={state.answers[question.id]}
      stepNumber={stepNumber}
      totalSteps={totalSteps}
    />
  );
}