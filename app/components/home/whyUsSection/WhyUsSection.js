import Image from "next/image";
export default function WhyUsSection() {
  return (
    <section className="flex w-full gap-4 my-40 xl:px-10 lg:px-10 md:px-10 sm:px-10">
      <div className="flex flex-col w-1/2">
        <h2 className="mb-8 md:text-5xl lg:text-6xl sm:text-4xl text-4xl">
          The Thinking Partner Behind Every Great Solution
        </h2>
        <p className="text-gray-500 text-xl">
          At ThoughtLink, we don’t just build software—we solve real business
          problems. By combining thoughtful strategy with custom-built
          solutions, we help you move faster, work smarter, and grow with
          confidence.
        </p>
      </div>
      <div className="relative w-1/2 h-[400px] md:h-[320px]">
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
