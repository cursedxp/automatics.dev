import { useCallback } from "react";
import { usePricingFunnel } from "../context/PricingFunnelContext";
import { calculateRecommendation } from "../utils";
import { FUNNEL_QUESTIONS } from "../constants";

export function useStepNavigation() {
  const { state, dispatch } = usePricingFunnel();

  const handleAnswer = useCallback((questionId, value) => {
    dispatch({ type: 'SET_ANSWER', questionId, value });
    
    if (state.currentStep < FUNNEL_QUESTIONS.length - 1) {
      setTimeout(() => dispatch({ type: 'NEXT_STEP' }), 300);
    } else {
      const newAnswers = { ...state.answers, [questionId]: value };
      const recommendation = calculateRecommendation(newAnswers);
      dispatch({ type: 'SHOW_RESULT', recommendation });
    }
  }, [state, dispatch]);

  const handleBack = useCallback(() => {
    if (state.currentStep > 0) {
      dispatch({ type: 'PREVIOUS_STEP' });
    } else {
      dispatch({ type: 'GO_TO_TABLE' });
    }
  }, [state.currentStep, dispatch]);

  const handleRestart = useCallback(() => {
    dispatch({ type: 'RESTART' });
  }, [dispatch]);

  const handleLearnMore = useCallback(() => {
    dispatch({ type: 'START_FUNNEL' });
  }, [dispatch]);

  return {
    handleAnswer,
    handleBack,
    handleRestart,
    handleLearnMore,
  };
}