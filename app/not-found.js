import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <div className="text-center space-y-6 flex flex-col items-center">
        <h1 className="text-9xl font-bold text-black">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-black">Page Not Found</h2>
          <p className="text-gray-500 max-w-md mx-auto">
            Oops! The page you&apos;re looking for seems to have wandered off
            into the digital void.
          </p>
        </div>
        <Link
          href="/"
          className="flex items-center justify-center w-fit gap-2 font-medium border-2 border-black text-black px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg hover:cursor-pointer transition-all duration-300"
        >
          <HiArrowLeft className="w-4 h-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
