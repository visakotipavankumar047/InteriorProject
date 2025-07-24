import Link from "next/link";
import logo4 from "../public/logo4.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center space-x-2">
        <Image
          src={logo4}
          width={100}
          height={100}
          className="object-contain"
          alt="Logo"
        />
      </div>
    </Link>
  );
};

export default Logo;
