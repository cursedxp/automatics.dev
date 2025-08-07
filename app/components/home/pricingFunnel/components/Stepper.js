export default function Stepper({ stepNumber, totalSteps }) {
  return (
    <div className="flex justify-center mt-8">
      <span className="text-sm text-gray-500">
        Step {stepNumber} of {totalSteps}
      </span>
    </div>
  );
}