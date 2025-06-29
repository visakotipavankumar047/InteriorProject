import Link from "next/link";
import logo_f from '../public/logo_f.png';
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
        <Image
            src={logo_f}
            width={100}
            height={100} 
            alt="logo"
        />
    </Link>
  )
}

export default Logo