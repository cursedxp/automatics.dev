import StepHeader from "./StepHeader";
import Stepper from "./Stepper";
import { usePricingFunnel } from "../context/PricingFunnelContext";

export default function BaseStep({ 
  question, 
  stepNumber, 
  totalSteps, 
  children,
  centered = true 
}) {
  const { state, dispatch } = usePricingFunnel();
  
  const handleBack = () => {
    if (state.currentStep > 0) {
      dispatch({ type: 'PREVIOUS_STEP' });
    } else {
      dispatch({ type: 'GO_TO_TABLE' });
    }
  };

  const handleToggleSidebar = () => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  };

  return (
    <div className={`p-8 ${centered ? 'flex flex-col min-h-[600px]' : ''}`}>
      <StepHeader 
        onBack={handleBack} 
        onToggleSidebar={handleToggleSidebar} 
        showSidebar={state.showSidebar} 
      />
      
      <div className={centered ? "flex-grow flex items-center" : "mb-12"}>
        <div className="w-full">
          <h3 className="md:text-4xl lg:text-5xl sm:text-4xl text-4xl mb-12 text-center text-gray-900 leading-tight">
            {question.question}
          </h3>
          {children}
        </div>
      </div>

      <Stepper stepNumber={stepNumber} totalSteps={totalSteps} />
    </div>
  );
}