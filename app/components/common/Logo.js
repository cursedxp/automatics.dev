import Image from "next/image";

const Logo = ({ className = "" }) => {
  return (
    <div className={`inline-block ${className}`}>
      <Image
        src="/assets/images/logo.svg"
        alt="automatics Logo"
        width={163}
        height={28}
        priority
        className="h-auto w-auto"
        style={{ maxWidth: "100%" }}
      />
    </div>
  );
};

export default Logo;
