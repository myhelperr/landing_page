"use client";

import Image from "next/image";
import Link from "next/link";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

import Navbar from "./components/Navbar";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

export default function Home(props: PropType) {
  const { options } = props;

  // Hero Section ref
  const [emblaRef] = useEmblaCarousel({ loop: true, ...options }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      speed: 0.5,
    }),
  ]);

  //  Testimonial ref
  const [testimonialRef] = useEmblaCarousel({ loop: true, ...options }, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      stopOnFocusIn: false,
      speed: 0.5,
    }),
  ]);

  // intersection observer
  const gridRefs = useRef<(HTMLDivElement | null | undefined)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    gridRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="">
      <Navbar />
      <section className="bg-primary text-primary-foreground flex md:flex-row flex-col justify-between items-center gap-6 py-8 md:px-16 mb-12">
        <div className="md:w-1/2 w-full space-y-6 mb-6 md:mb-0 px-6">
          <h1 className="text-5xl/14 font-bold md:text-left text-center max-w-[500px]">
            Reclaim your weekend with Helperr
          </h1>
          <p className="text-lg md:max-w-[80%] md:text-left text-center">
            Whether you need a quick flat-tire fix, snow cleared off your car,
            or a massive couch moved, get Helperr now for an extra hand.
          </p>
          <div className="flex gap-2 md:gap-4 justify-center md:justify-start">
            <Link
              href={"/waitlist"}
              className="hover:scale-110 text-sm duration-200 active:scale-90 bg-secondary text-white py-3 px-7 md:px-9 rounded-full font-semibold"
            >
              Join Our Waitlist
            </Link>
            <Link
              href="#about"
              className="hover:scale-110 text-sm duration-200 active:scale-90 border border-white rounded-full py-3 px-9 md:px-12"
            >
              Learn More
            </Link>
          </div>
          <div className="flex items-center md:justify-start justify-center space-x-2 font-semibold">
            <Image
              src="/avatars.png"
              alt="customer-1"
              width={130}
              height={130}
              className="w-[130px] md:w-[130px] object-contain"
              priority
            />
            <h1 className="md:max-w-[100px]">Trusted by 1,200+ users</h1>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex items-center justify-center">
          <div className="relative">
            {/* Left shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-primary to-transparent z-10"></div>

            {/* Right shadow */}
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-primary to-transparent z-10"></div>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                <div className="carousel-div">
                  <Image
                    src="/jovial-1.jpeg"
                    alt="Hero Image"
                    width={285}
                    height={300}
                    className="carousel-img"
                    priority
                  />
                </div>
                <div className="carousel-div">
                  <Image
                    src="/carousel-2.jpg"
                    alt="Hero Image"
                    width={285}
                    height={300}
                    className="carousel-img"
                    priority
                  />
                </div>
                <div className="carousel-div">
                  <Image
                    src="/carousel-3.jpg"
                    alt="Hero Image"
                    width={285}
                    height={300}
                    className="carousel-img"
                    priority
                  />
                </div>
                <div className="carousel-div">
                  <Image
                    src="/carousel-4.jpg"
                    alt="Hero Image"
                    width={285}
                    height={300}
                    className="carousel-img"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section id="about" className="w-[80%] mx-auto mb-12 space-y-10">
        <h1 className="text-center text-primary font-bold text-3xl md:text-4xl">
          How it works
        </h1>
        <div className="flex md:flex-row flex-col gap-10 items-center md:items-stretch justify-center">
          <div className="how-it-works bg-primary">
            <Image
              src={"/svg/timer.svg"}
              alt="Timer Icon"
              width={100}
              height={100}
              priority
            />
            <h2>Post your task</h2>
            <p>Describe what you need</p>
          </div>
          <div className="how-it-works hover:text-white duration-200 hover:bg-ring text-gray-700 border-4 hover:border-white border-gray-300">
            <Image
              src={"/svg/check-list.svg"}
              alt="Check List Icon"
              width={100}
              height={100}
              priority
            />
            <h2>Get match instantly</h2>
            <p>Pick the right person for you </p>
          </div>
          <div className="how-it-works hover:text-white duration-200 hover:bg-secondary text-gray-700 border-4 hover:border-white border-gray-300">
            <Image
              src={"/svg/toast.svg"}
              alt="Toast Icon"
              width={100}
              height={100}
              priority
            />
            <h2>Live your life</h2>
            <p>Go do what you really want while we handle the boring stuff.</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Link
            href={"waitlist"}
            className="bg-primary text-white py-3 px-6 rounded-full hover:scale-105 active:scale-95 duration-200"
          >
            Join our Waitlist
          </Link>
        </div>
      </section>

      <section className="w-full mx-auto mb-12 py-8">
        <div className="grid md:grid-cols-3 md:grid-rows-2 grid-cols-2 grid-rows-3 md:h-[600px] h-[800px]">
          {/* First image - full width on mobile, left column on desktop */}
          <div
            ref={(el) => {
              gridRefs.current[0] = el;
            }}
            style={{ transitionDelay: "200ms" }}
            className="from-bottom md:row-span-2 col-span-2 md:col-span-1 bg-gray-200 overflow-hidden"
          >
            <Image
              src="/grid-1.jpg"
              alt="Grid Image 1"
              width={400}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Second image - top right on mobile and desktop */}
          <div
            ref={(el) => {
              gridRefs.current[1] = el;
            }}
            style={{ transitionDelay: "250ms" }}
            className="from-right bg-gray-200 overflow-hidden"
          >
            <Image
              src="/grid-2.jpg"
              alt="Grid Image 2"
              width={400}
              height={290}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Third image - spans full height on desktop, bottom right on mobile */}
          <div
            ref={(el) => {
              gridRefs.current[2] = el;
            }}
            style={{ transitionDelay: "300ms" }}
            className="from-right md:row-span-2 bg-gray-200 overflow-hidden"
          >
            <Image
              src="/grid-4.jpg"
              alt="Grid Image 3"
              width={400}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Fourth image - middle column bottom on desktop, full width bottom on mobile */}
          <div
            ref={(el) => {
              gridRefs.current[3] = el;
            }}
            style={{ transitionDelay: "350ms" }}
            className="from-bottom col-span-2 md:col-span-1 bg-gray-200 overflow-hidden"
          >
            <Image
              src="/grid-3.jpg"
              alt="Grid Image 4"
              width={400}
              height={290}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section
        id="solutions"
        className="w-full px-6 mx-auto md:px-16 mb-12 flex gap-6 items-center"
      >
        <div className="hidden md:grid grid-cols-2 grid-rows-3 gap-5 md:w-[55%] w-full">
          {/* First image - spans entire first column (all 3 rows) */}
          <div className="row-span-3 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/carousel-3.jpg"
              alt="Grid Image 1"
              width={400}
              height={550}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Second image - takes up first 2 rows of second column */}
          <div className="row-span-2 bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/grid-5.jpg"
              alt="Grid Image 2"
              width={400}
              height={400}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Third image - takes up last row of second column */}
          <div className="bg-gray-200 rounded-xl overflow-hidden">
            <Image
              src="/grid-6.jpg"
              alt="Grid Image 3"
              width={400}
              height={150}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="md:w-[45%] w-full space-y-9">
          <h1 className="text-3xl md:text-4xl md:text-left text-center font-bold mb-12 text-primary">
            Why You&apos;ll Love It?
          </h1>

          <div className="why-love-it-div">
            <h2 className="bg-ring">1</h2>
            <div>
              {" "}
              <h3>Reclaim your time:</h3>
              <p>
                Delegate daily chores in seconds and enjoy your hobbies, family,
                or downtime without worry.
              </p>
            </div>
          </div>

          <div className="why-love-it-div">
            <h2 className="bg-primary">2</h2>
            <div>
              {" "}
              <h3>Stress Less:</h3>
              <p>
                Offload errands, moving help, and odd jobs to vetted helpers. No
                more “to-do” list overwhelm.
              </p>
            </div>
          </div>

          <div className="why-love-it-div">
            <h2 className="bg-gray-500">3</h2>
            <div>
              {" "}
              <h3>Always Ready:</h3>
              <p>
                Tap once and match instantly with reliable neighbours
                who&apos;ll finish your task to your standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-black mb-12 md:px-16 px-6 py-8">
        <h1 className="text-center font-bold text-3xl md:text-4xl text-white">
          Trusted by your Neighbours
        </h1>

        <div className="overflow-hidden" ref={testimonialRef}>
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="max-w-[350px] mx-auto space-y-5 mt-12 bg-white p-6 ml-6 rounded-2xl carousel-div"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={"/testimonial.jpg"}
                    alt="testimonial"
                    width={50}
                    height={50}
                    priority
                    className="rounded-full w-12 h-12 object-cover"
                  />
                  <div>
                    <h2 className="font-bold">Emma Raquel</h2>{" "}
                    <p className="text-gray-500">Toronto, Canada</p>
                  </div>
                </div>

                <p className="text-gray-500">
                  “I never realized how much time I wasted on errands—Helperr
                  changed that. Five-star service every time!”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <FAQSection />

      {/* CTA */}
      <section className="w-full py-24 px-6 md:px-16 text-center bg-secondary">
        <div className="flex justify-center">
          <Link
            href="/waitlist"
            className="group text-xl md:text-3xl text-white  relative inline-flex items-center gap-3 bg-ring font-semibold px-6 md:px-14 py-3 md:py-6 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-ring/50"
          >
            Join our Waitlist
            <Image
              src={"/svg/thunder.svg"}
              alt="thunder"
              width={50}
              height={50}
              className="ml-2 w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
          </Link>
        </div>

        <h2 className="text-md md:text-xl mt-8 font-bold text-white leading-tight">
          Ready to reclaim your time?
        </h2>
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
}
