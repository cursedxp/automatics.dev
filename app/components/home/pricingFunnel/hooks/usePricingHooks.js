import { useMemo } from "react";

// Custom hook for determining current view
export const useCurrentView = (state) => {
  return useMemo(() => {
    if (!state.showFunnel && !state.showResult) {
      return 'table';
    }
    if (state.showResult) {
      return 'result';
    }
    return 'funnel';
  }, [state.showFunnel, state.showResult]);
};

// Custom hook for grid layout classes
export const useGridLayout = (showSidebar) => {
  return useMemo(() => ({
    gridClass: showSidebar 
      ? "grid grid-cols-1 lg:grid-cols-3" 
      : "grid grid-cols-1",
    contentClass: showSidebar 
      ? "lg:col-span-2" 
      : "w-full",
  }), [showSidebar]);
};

// Custom hook for animation states
export const useAnimationState = (isVisible) => {
  return useMemo(() => ({
    shouldAnimate: isVisible,
    animationDelay: isVisible ? 0 : 300,
  }), [isVisible]);
};

// Custom hook for responsive breakpoints
export const useResponsive = () => {
  return useMemo(() => ({
    isMobile: typeof window !== 'undefined' && window.innerWidth < 640,
    isTablet: typeof window !== 'undefined' && window.innerWidth >= 640 && window.innerWidth < 1024,
    isDesktop: typeof window !== 'undefined' && window.innerWidth >= 1024,
  }), []);
};