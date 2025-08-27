import { MenuIcon } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <MenuIcon 
            size={28} 
            className="active:scale-90 hover:scale-105 duration-200 cursor-pointer" 
          />
        </SheetTrigger>
        <SheetContent side="right" className="w-full">
          <SheetHeader className="py-8">
            <SheetTitle className="flex justify-center items-center">
              <Image
                priority
                src="/logo.svg"
                alt="Helperr Logo"
                width={100}
                height={100}
              />
            </SheetTitle>
          </SheetHeader>
          
          <div className="flex flex-col space-y-6 mt-8 w-[70%] mx-auto">
            <SheetClose asChild>
              <Link
                href="#solutions"
                className="hover:scale-105 font-semibold text-lg duration-200 active:scale-95 text-center py-3"
              >
                Our Solutions
              </Link>
            </SheetClose>
            
            <SheetClose asChild>
              <Link
                href="#faqs"
                className="hover:scale-105 font-semibold text-lg duration-200 active:scale-95 text-center py-3"
              >
                FAQs
              </Link>
            </SheetClose>
            
            <SheetClose asChild>
              <Link
                href="#about"
                className="hover:scale-105 font-semibold text-lg duration-200 active:scale-95 text-center py-3"
              >
                About Us
              </Link>
            </SheetClose>

             <SheetClose asChild>
              <Link
                href="/waitlist"
                className="hover:scale-105 text-lg duration-200 active:scale-95 bg-secondary text-white py-4 px-8 rounded-full font-semibold text-center"
              >
                Join Waitlist
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link
                href="/waitlist"
                className="hover:scale-105 text-lg duration-200 active:scale-95 border-2 border-primary py-4 px-8 rounded-full font-semibold text-center text-primary"
              >
               Learn More
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
