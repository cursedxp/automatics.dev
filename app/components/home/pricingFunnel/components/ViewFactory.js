"use client";
import PricingTableView from "./PricingTableView";
import ResultView from "./ResultView";
import FunnelView from "./FunnelView";

const ViewFactory = ({ viewType, state, handlers, gridLayout }) => {
  const views = {
    table: <PricingTableView />,
    result: (
      <ResultView
        recommendation={state.recommendation}
        onRestart={handlers.handleRestart}
      />
    ),
    funnel: <FunnelView state={state} gridLayout={gridLayout} />,
  };

  return views[viewType] || null;
};

export default ViewFactory;