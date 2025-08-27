import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12">
      <div className="grid md:grid-cols-5 md:grid-rows-2 grid-cols-1 grid-rows-3 mx-auto">
        {/* Contact information section - First on mobile, top right on desktop */}
        <div className="flex md:items-center md:col-span-3 md:order-2 order-1 md:justify-center">
          <div>
            <h3 className="md:max-w-[400px] px-6 md:text-2xl text-xl font-semibold text-gray-800 md:font-light md:text-left text-center">
              Have more questions or feedback? We're here to help.
            </h3>

            <div className="mt-4 flex md:flex-row flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <Mail
                  size={36}
                  className="bg-primary rounded text-white p-2 "
                />
                <Link
                  href="mailto:contact@myhelperr.com"
                  className="text-gray-800 text-sm"
                >
                  contact@myhelperr.com
                </Link>
              </div>

              <div className="flex items-center gap-2">
                <Phone
                  size={36}
                  className="bg-primary rounded text-white p-2 "
                />
                <Link href="tel:+14372593517" className="text-gray-800 text-sm">
                  (437) 259‑3517
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="https://facebook.com/myhelperr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-sm"
                >
                  <FaFacebookSquare
                    size={24}
                    className="text-primary hover:scale-105 active:scale-95 duration-200"
                  />
                </Link>
                <Link
                  href="https://instagram.com/myhelperr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-sm"
                >
                  <FaInstagram
                    size={24}
                    className="text-primary hover:scale-105 active:scale-95 duration-200"
                  />
                </Link>
                <Link
                  href="https://x.com/myhelperr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 text-sm"
                >
                  <FaXTwitter
                    size={24}
                    className="text-primary hover:scale-105 active:scale-95 duration-200"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Logo section - Second on mobile, top left on desktop */}
        <div className="flex items-center md:col-span-2 md:order-1 order-2 justify-center">
          <Image
            src="/logo.svg"
            alt="Helperr Logo"
            width={200}
            height={60}
            className="w-auto h-12"
            priority
          />
        </div>

        {/* Footer image section - Spans entire bottom row (both columns) */}
        <div className="md:col-span-5 md:row-start-2 overflow-hidden order-3">
          <Image
            src="/footer.jpg"
            alt="Footer Image"
            width={500}
            height={200}
            className="w-full h-full object-cover brightness-110 contrast-105"
            priority
            quality={100}
          />
        </div>
      </div>
    </footer>
  );
}
