import Image from "next/image";
export default function WhyUsSection() {
  return (
    <section className="flex flex-col sm:flex-row w-full gap-4 my-20 xl:px-10 lg:px-10 md:px-10 sm:px-10 px-10">
      <div className="flex flex-col sm:w-1/2 w-full">
        <h2 className="mb-8 md:text-5xl lg:text-6xl sm:text-4xl text-5xl">
          The Thinking Partner Behind Every Great Solution
        </h2>
        <p className="text-gray-500 text-xl mb-4">
          At ThoughtLink, we don’t just build software—we solve real business
          problems. By combining thoughtful strategy with custom-built
          solutions, we help you move faster, work smarter, and grow with
          confidence.
        </p>
      </div>
      <div className="relative w-full h-[400px] md:h-[320px] sm:w-1/2">
        <Image
          src="/assets/images/team.jpg"
          alt="Why Us"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
