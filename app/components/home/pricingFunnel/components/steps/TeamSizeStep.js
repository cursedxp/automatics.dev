import { useState } from "react";
import BaseStep from "../BaseStep";
import SliderInput from "../SliderInput";

export default function TeamSizeStep({ 
  question, 
  onAnswer, 
  currentAnswer, 
  stepNumber, 
  totalSteps
}) {
  const [sliderValue, setSliderValue] = useState(
    currentAnswer || question.min || 1
  );

  return (
    <BaseStep question={question} stepNumber={stepNumber} totalSteps={totalSteps}>
      <SliderInput
        question={question}
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        onAnswer={onAnswer}
      />
    </BaseStep>
  );
}