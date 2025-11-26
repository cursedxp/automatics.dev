"use client";
import { useState } from "react";
import {
  HiOutlineCommandLine,
  HiOutlineSwatch,
  HiOutlineDocumentText,
  HiOutlineSquares2X2,
  HiOutlineDevicePhoneMobile,
  HiOutlineChartBar,
  HiOutlineCloud,
  HiOutlinePaintBrush,
  HiOutlineSparkles,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const solutions = [
    {
      icon: HiOutlineCommandLine,
      title: "Process Automation",
      description:
        "Smart automation solutions that eliminate repetitive tasks and boost team efficiency with intelligent workflows.",
      tags: ["API Integration", "Workflow Automation", "Data Processing"],
    },
    {
      icon: HiOutlineSquares2X2,
      title: "Custom Business Apps",
      description:
        "Tailored applications built for your unique business processes, from internal tools to customer-facing platforms.",
      tags: ["Web Apps", "Mobile Apps", "Internal Tools"],
    },
    {
      icon: HiOutlineDocumentText,
      title: "CMS & Content Systems",
      description:
        "Powerful content management solutions that make it easy to manage your data without technical headaches.",
      tags: ["Headless CMS", "Admin Panels", "Content Workflows"],
    },
    {
      icon: HiOutlineCloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services to ensure your systems grow with your business.",
      tags: ["AWS", "Azure", "Scalability"],
    },
    {
      icon: HiOutlineChartBar,
      title: "Analytics & Reporting",
      description:
        "Data-driven insights with custom dashboards and reporting tools to make informed business decisions.",
      tags: ["Dashboards", "BI Tools", "Data Visualization"],
    },
    {
      icon: HiOutlineSwatch,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, delightful experiences ensuring your product works seamlessly.",
      tags: ["User Research", "Wireframing", "Prototyping"],
    },
    {
      icon: HiOutlineDevicePhoneMobile,
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring your product looks and works perfectly on any device or screen size.",
      tags: ["Mobile First", "Adaptive Layouts", "Cross-platform"],
    },
    {
      icon: HiOutlinePaintBrush,
      title: "Brand Identity",
      description:
        "Cohesive visual identity and design systems that make your brand memorable and consistent.",
      tags: ["Design Systems", "Style Guides", "Branding"],
    },
    {
      icon: HiOutlineSparkles,
      title: "Product Design",
      description:
        "End-to-end product design from concept to launch, creating solutions users love to use.",
      tags: ["Product Strategy", "Design Thinking", "User Testing"],
    },
  ];

  const totalSlides = solutions.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = totalSlides - 3; // 2.5 cards visible, so max is total - 3
      return prev < maxSlide ? prev + 1 : prev;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className="flex flex-col items-center justify-center my-20 px-4 sm:px-10">
      <div className="w-full max-w-7xl">
        <h2 className="text-5xl sm:text-6xl mb-6 text-center">
          Tailored Solutions for Your Business
        </h2>
        <p className="text-center text-gray-500 text-lg sm:text-xl mb-16 max-w-3xl mx-auto">
          Every business faces unique challenges. We transform your pain points
          into opportunities with tailored solutions.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-8 lg:gap-12">
          {/* Left Side - Title and Description */}
          <div className="space-y-4">
            <h3 className="md:text-5xl lg:text-6xl sm:text-4xl text-5xl lg:leading-18 sm:leading-12 xs:text-4xl xs:leading-10">
              Problems we solve
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your CRM sits half-empty because nobody trusts the data.
              Converting a lead means jumping between five different tools and
              doing the same data entry three times. Sales uses Salesforce,
              support lives in Zendesk, and ops keeps the real numbers in a
              Google Sheet. When the CEO wants a forecast, someone spends two
              days in Excel hoping the formulas work.
            </p>
          </div>

          {/* Right Side - Carousel with Controls */}
          <div className="relative w-full">
            {/* Solution Cards Carousel */}
            <div className="relative overflow-hidden py-8 -my-8">
              <div
                className="flex gap-4 transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 38}%)`,
                }}
              >
                {solutions.map((solution, index) => {
                  const SolutionIcon = solution.icon;
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 bg-white rounded-2xl p-6 shadow-lg border-2 border-transparent hover:border-black transition-all duration-300"
                      style={{ width: "30%", minWidth: "220px" }}
                    >
                      <div className="flex items-center justify-center rounded-full bg-black w-12 h-12 mb-4">
                        <SolutionIcon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold mb-3">
                        {solution.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Controls Below Carousel */}
            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  currentSlide === 0
                    ? "bg-white text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-black hover:text-white cursor-pointer"
                }`}
                aria-label="Previous solution"
              >
                <HiChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Prev</span>
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide >= totalSlides - 3}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  currentSlide >= totalSlides - 3
                    ? "bg-white text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-black hover:text-white cursor-pointer"
                }`}
                aria-label="Next solution"
              >
                <span className="text-sm font-medium">Next</span>
                <HiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
