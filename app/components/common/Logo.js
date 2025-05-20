import Image from "next/image";
import Link from "next/link";

const Logo = ({ className = "" }) => {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src="/assets/images/logo.svg"
        alt="Automatics Logo"
        width={163}
        height={28}
        priority
        className="h-auto w-auto"
        style={{ maxWidth: "100%" }}
      />
    </Link>
  );
};

export default Logo;
