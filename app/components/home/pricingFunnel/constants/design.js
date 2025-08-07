export const DESIGN_TOKENS = {
  typography: {
    stepTitle: "md:text-4xl lg:text-5xl sm:text-4xl text-4xl text-center text-gray-900 leading-tight",
    cardTitle: "text-xl font-bold text-gray-900",
    description: "text-sm text-gray-500",
    sectionTitle: "text-6xl text-gray-900 mb-6"
  },
  spacing: {
    sectionMargin: "my-20",
    cardPadding: "p-8",
    stepMinHeight: "min-h-[600px]",
    titleMargin: "mb-12",
    stepMargin: "mb-8"
  },
  animations: {
    duration: 300,
    spring: {
      stiffness: 300,
      damping: 25
    },
    fadeIn: {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    }
  },
  colors: {
    primary: "bg-black hover:bg-gray-800",
    toggle: {
      active: "bg-yellow-300",
      inactive: "bg-gray-200"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-500",
      muted: "text-gray-600"
    }
  }
};