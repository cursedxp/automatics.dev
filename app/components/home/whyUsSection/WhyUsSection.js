import Image from "next/image";
import {
  HiOutlineCog6Tooth,
  HiOutlineStar,
  HiOutlineChartBar,
} from "react-icons/hi2";
export default function WhyUsSection() {
  return (
    <section className="flex flex-col w-full gap-4 my-20 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-10">
      <div className="flex w-full gap-6">
        <div className="flex flex-col sm:w-1/2 w-full">
          <h2 className="mb-8 md:text-5xl lg:text-6xl sm:text-4xl text-5xl">
            The Thinking Partner Behind Every Great Solution
          </h2>
          <p className="text-gray-500 text-xl mb-4">
            At automatics, we&apos;re more than just software engineers
            we&apos;re your dedicated technology partners. Founded by a solution
            architect and a product designer, we only take on projects in
            industries where we have first-hand experience. This means we speak
            your language and understand your challenges from day one.
          </p>
        </div>
        <div className="relative w-full h-[400px] md:h-[360px] sm:w-1/2">
          <Image
            src="/assets/images/team.jpg"
            alt="Why Us"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 mt-10 border-y border-dashed border-gray-300 py-10 gap-y-8 gap-x-6">
        {/* Column 1 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <HiOutlineCog6Tooth className="w-6 h-6 text-gray-900 mr-4" />
            <h3 className="text-lg text-gray-800">No Management Overhead</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            You won&apos;t need to manage yet another team. We handle everything
            so you can focus on your business.
          </p>
        </div>
        {/* Column 2 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <HiOutlineStar className="w-6 h-6 text-gray-900 mr-4" />
            <h3 className="text-lg text-gray-800">Senior Expertise</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our team is made up of senior engineers with years of experience in
            the industry.
          </p>
        </div>
        {/* Column 3 */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-2">
            <HiOutlineChartBar className="w-6 h-6 text-gray-900 mr-4" />
            <h3 className="text-lg text-gray-800">Results-Driven Approach</h3>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            We focus on delivering measurable results that drive your business
            forward.
          </p>
        </div>
      </div>
    </section>
  );
}
