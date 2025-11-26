"use client";
import { createContext, useContext, useReducer } from "react";

const PricingFunnelContext = createContext();

const initialState = {
  showFunnel: false,
  currentStep: 0,
  answers: {},
  showResult: false,
  recommendation: null,
  showSidebar: true,
  showDetails: false,
};

function pricingFunnelReducer(state, action) {
  switch (action.type) {
    case 'START_FUNNEL':
      return { ...state, showFunnel: true, currentStep: 0, answers: {}, showResult: false };
    case 'SET_ANSWER':
      return { ...state, answers: { ...state.answers, [action.questionId]: action.value } };
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREVIOUS_STEP':
      return { ...state, currentStep: Math.max(0, state.currentStep - 1) };
    case 'SHOW_RESULT':
      return { ...state, showResult: true, recommendation: action.recommendation };
    case 'RESTART':
      return initialState;
    case 'TOGGLE_SIDEBAR':
      return { ...state, showSidebar: !state.showSidebar };
    case 'GO_TO_TABLE':
      return { ...state, showFunnel: false, showResult: false };
    case 'TOGGLE_DETAILS':
      return { ...state, showDetails: !state.showDetails };
    default:
      return state;
  }
}

export function PricingFunnelProvider({ children }) {
  const [state, dispatch] = useReducer(pricingFunnelReducer, initialState);
  return (
    <PricingFunnelContext.Provider value={{ state, dispatch }}>
      {children}
    </PricingFunnelContext.Provider>
  );
}

export function usePricingFunnel() {
  const context = useContext(PricingFunnelContext);
  if (!context) {
    throw new Error('usePricingFunnel must be used within PricingFunnelProvider');
  }
  return context;
}