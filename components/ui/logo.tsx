import Link from "next/link";
import Image from "next/image";
import LogoImage from "@/public/images/koala.png";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image src={LogoImage} alt="Kooslab" width={40} height={40} />
    </Link>
  );
}
