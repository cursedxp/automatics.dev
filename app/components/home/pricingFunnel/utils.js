export const calculateRecommendation = (answers) => {
  const scores = {
    essential: 0,
    growth: 0,
    enterprise: 0,
  };

  // Team size scoring
  const teamSize = parseInt(answers.team_size) || 1;
  if (teamSize <= 5) {
    scores.essential += 2;
    scores.growth += 1;
  } else if (teamSize <= 20) {
    scores.growth += 2;
    scores.enterprise += 1;
  } else {
    scores.enterprise += 3;
  }

  // Project complexity scoring
  if (answers.project_complexity === "validation") {
    scores.essential += 3;
  } else if (answers.project_complexity === "development") {
    scores.growth += 3;
  } else {
    scores.enterprise += 3;
  }

  // Budget scoring
  if (answers.budget === "essential") {
    scores.essential += 3;
  } else if (answers.budget === "growth") {
    scores.growth += 3;
    scores.essential += 1;
  } else if (answers.budget === "premium") {
    scores.growth += 2;
    scores.enterprise += 2;
  } else {
    scores.enterprise += 3;
  }

  // Timeline scoring
  if (answers.timeline === "urgent") {
    scores.essential += 2;
    scores.growth += 1;
  } else if (answers.timeline === "standard") {
    scores.growth += 2;
    scores.essential += 1;
  } else {
    scores.enterprise += 2;
    scores.growth += 1;
  }

  // Support level scoring
  if (answers.support_level === "basic") {
    scores.essential += 2;
  } else if (answers.support_level === "standard") {
    scores.growth += 2;
  } else if (answers.support_level === "premium") {
    scores.growth += 1;
    scores.enterprise += 2;
  } else {
    scores.enterprise += 3;
  }

  const recommendation = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  // Create proper paragraphs for each plan
  const planDescriptions = {
    essential: [
      "Perfect for startups looking to validate concepts with essential features. Your budget aligns with our streamlined approach.",
      "Get rapid validation through focused development, allowing you to test your idea quickly without complexity."
    ],
    growth: [
      "Ideal for growing businesses ready to scale with comprehensive development. Your requirements match our balanced approach.",
      "Accelerate your timeline with two parallel development tracks for quality delivery at market speed."
    ],
    enterprise: [
      "Designed for larger organizations requiring enterprise-grade solutions with dedicated support and customization.",
      "Your enterprise needs demand our highest service level with dedicated management and scalable architecture."
    ]
  };

  const reasons = planDescriptions[recommendation] || planDescriptions.growth;

  return { planId: recommendation, reasons };
};