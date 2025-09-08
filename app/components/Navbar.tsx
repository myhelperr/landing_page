import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <nav className="z-50 bg-white flex w-full items-center justify-between py-6 md:py-8 md:px-16 px-6 shadow sticky top-0 right-0 left-0">
      <div>
        <Image
          priority
          src="/logo.svg"
          alt="Helperr Logo"
          width={130}
          height={130}
        />
      </div>

      <div className="hidden md:flex items-center space-x-9">
        <Link
          href="#solutions"
          className="hover:scale-110 font-semibold text-sm duration-200 active:scale-90"
        >
          Our Solutions
        </Link>
        <Link
          href="#faqs"
          className="hover:scale-110 font-semibold text-sm duration-200 active:scale-90"
        >
          FAQs
        </Link>
        <Link
          href="#about"
          className="hover:scale-110 font-semibold text-sm duration-200 active:scale-90"
        >
          About Us
        </Link>

        <Link
          href="/waitlist"
          className="hover:scale-110 text-sm duration-200 active:scale-90 bg-primary text-white py-2 px-4 rounded-full font-semibold "
        >
          Join Waitlist
        </Link>
      </div>

      <MobileNav />
    </nav>
  );
}
