export default function SliderInput({ question, sliderValue, setSliderValue, onAnswer }) {
  return (
    <div className="max-w-2xl mx-auto">
      <style jsx>{`
        .black-slider-thumb::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .black-slider-thumb::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      <div className="mb-8">
        <input
          type="range"
          min={question.min}
          max={question.max}
          step={question.step}
          value={sliderValue}
          onChange={(e) => setSliderValue(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider black-slider-thumb"
          style={{
            background: `linear-gradient(to right, #000 0%, #000 ${
              ((sliderValue - question.min) / (question.max - question.min)) * 100
            }%, #e5e7eb ${
              ((sliderValue - question.min) / (question.max - question.min)) * 100
            }%, #e5e7eb 100%)`,
          }}
        />
        <div className="flex justify-between text-sm text-gray-500 mt-2">
          {question.labels.map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-gray-900 mb-4">
          {sliderValue} {sliderValue === 1 ? "person" : "people"}
        </div>
        <button
          onClick={() => onAnswer(sliderValue)}
          className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}