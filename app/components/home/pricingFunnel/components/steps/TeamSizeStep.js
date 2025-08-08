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
      <div>
        <SliderInput
          question={question}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
        />
        <div className="text-center mt-8">
          <button
            onClick={() => onAnswer(sliderValue)}
            className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
          >
            Continue
          </button>
        </div>
      </div>
    </BaseStep>
  );
}