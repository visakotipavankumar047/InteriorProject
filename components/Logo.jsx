import Link from "next/link";
import logo4 from "../public/logo4.png";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
        <Image
            src={logo4}
            width={120}
            height={120} 
            alt="logo"
        />
    </Link>
  )
}

export default Logo