import BaseStep from "../BaseStep";
import MultipleChoiceOptions from "../MultipleChoiceOptions";

export default function ProjectComplexityStep({ 
  question, 
  onAnswer, 
  currentAnswer, 
  stepNumber, 
  totalSteps
}) {
  return (
    <BaseStep question={question} stepNumber={stepNumber} totalSteps={totalSteps}>
      <MultipleChoiceOptions
        question={question}
        currentAnswer={currentAnswer}
        onAnswer={onAnswer}
      />
    </BaseStep>
  );
}