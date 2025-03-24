import Image from "next/image";
export default function WhyUsSection() {
  return (
    <section className="flex w-full gap-10 my-20">
      <div className="flex flex-col w-1/2">
        <h2 className="text-6xl mb-8">
          The Thinking Partner Behind Every Great Solution
        </h2>
        <p className="text-gray-500">
          At ThoughtLink, we don’t just build software—we solve real business
          problems. By combining thoughtful strategy with custom-built
          solutions, we help you move faster, work smarter, and grow with
          confidence.
        </p>
      </div>
      <div className="relative w-1/2 h-[400px]">
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
