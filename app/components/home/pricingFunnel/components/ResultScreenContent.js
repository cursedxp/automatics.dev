"use client";
import { useState } from "react";
import { HiPhone } from "react-icons/hi2";
import { usePricingFunnel } from "../context/PricingFunnelContext";
import PricingModelSidebar from "./PricingModelSidebar";

function RecommendedPlanCard({ recommendedPlan }) {
  return (
    <div className="text-center mb-6">
      <span className="inline-block bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
        RECOMMENDED FOR YOU
      </span>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        {recommendedPlan.name}
      </h3>
      <div className="text-3xl font-bold text-gray-900 mb-3">
        {recommendedPlan.price}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed max-w-lg mx-auto">
        {recommendedPlan.description}
      </p>
    </div>
  );
}

function WhySection({ recommendation }) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">
        Why this plan is perfect for you:
      </h4>
      <div className="space-y-3 max-w-xl mx-auto text-left">
        {recommendation.reasons.slice(0, 2).map((reason, idx) => (
          <p key={idx} className="text-gray-500 text-sm leading-relaxed">
            {reason}
          </p>
        ))}
      </div>
    </div>
  );
}

function ActionButtons({ recommendedPlan, onRestart, onBookCall, isSubmitting }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <button 
        onClick={onBookCall}
        disabled={isSubmitting}
        className="bg-black text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:cursor-pointer hover:bg-gray-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Processing...</span>
          </>
        ) : (
          <>
            <HiPhone className="w-4 h-4" />
            Book A Call
          </>
        )}
      </button>
      <button
        onClick={onRestart}
        disabled={isSubmitting}
        className="py-3 px-6 bg-transparent border border-gray-300 text-gray-700 rounded-full font-semibold hover:border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Compare All Plans
      </button>
    </div>
  );
}

export default function ResultScreenContent({ recommendation, plans, onRestart }) {
  const { state } = usePricingFunnel();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  
  const recommendedPlan = plans.find((p) => p.id === recommendation.planId);

  const handleBookCall = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Prepare the submission data
      const submissionData = {
        answers: state.answers,
        recommendation: recommendation.planId,
      };

      // Submit to API
      const response = await fetch('/api/funnel/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      // Store refId in sessionStorage for tracking
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('funnelRefId', data.refId);
      }

      // Redirect to Calendly with refId
      window.location.href = data.bookingUrl;
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message);
      setIsSubmitting(false);
      
      // Fallback: redirect to regular Calendly URL
      const fallbackUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact-us';
      setTimeout(() => {
        window.location.href = fallbackUrl;
      }, 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
      {/* Left Side - Recommended Plan */}
      <div className="lg:col-span-2 p-8 flex flex-col justify-center">
        <RecommendedPlanCard recommendedPlan={recommendedPlan} />
        <WhySection recommendation={recommendation} />
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
            {error}. Redirecting to booking page...
          </div>
        )}
        
        <ActionButtons 
          recommendedPlan={recommendedPlan} 
          onRestart={onRestart}
          onBookCall={handleBookCall}
          isSubmitting={isSubmitting}
        />
      </div>

      {/* Right Side - Why Our Pricing Model Works */}
      <PricingModelSidebar />
    </div>
  );
}