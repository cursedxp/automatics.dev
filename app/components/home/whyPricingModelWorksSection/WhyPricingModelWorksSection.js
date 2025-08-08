"use client";
import {
  HiOutlineCurrencyDollar,
  HiOutlineDocument,
  HiOutlineArrowPath,
} from "react-icons/hi2";

export default function WhyPricingModelWorksSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full my-20">
      <div className="max-w-7xl mx-auto w-full px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-6xl text-gray-900 mb-6">
            Why Our Pricing Model Works
          </h2>
          <p className="text-gray-500 text-xl max-w-3xl mx-auto leading-relaxed">
            Our subscription-based approach eliminates the traditional pain
            points of project-based pricing, giving you predictable costs and
            unlimited flexibility.
          </p>
        </div>

        {/* Three Column Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineCurrencyDollar className="w-8 h-8 text-gray-900" />
              <h3 className="text-2xl font-bold text-gray-900">
                No Hourly Bills
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Forget about tracking hours or dealing with surprise invoices. You
              pay a predictable flat monthly rate based on how many tasks we can
              work on simultaneously – whether that&apos;s 1 task at a time, 2 tasks
              at a time, or more.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineDocument className="w-8 h-8 text-gray-900" />
              <h3 className="text-2xl font-bold text-gray-900">
                Unlimited Requests
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              There&apos;s no limit to the number of ideas, improvements, or bug fixes
              you can propose. Simply add them to your backlog and we&apos;ll plan and
              execute them systematically in our ongoing monthly cycles.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <HiOutlineArrowPath className="w-8 h-8 text-gray-900" />
              <h3 className="text-2xl font-bold text-gray-900">
                Adjust as Needed
              </h3>
            </div>
            <p className="text-gray-600 text-base leading-relaxed">
              Our subscription model is month-to-month with complete flexibility.
              Need to speed up development? Increase parallel tasks. Need to slow
              down? Scale back anytime – no long-term contracts required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}