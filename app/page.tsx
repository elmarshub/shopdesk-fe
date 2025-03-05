import Header from "@/components/functional/header";
import Image from "next/image";
import Desktop from "../public/icons/desktop-img.png";
import Mobile from "../public/icons/mobile.png";

export default function Home() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center gap-8 pt-10 pb-28 px-5">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8 max-w-[867px] p-2">
          <h1 className="text-4xl leading-14 font-bold md:text-6xl md:leading-16 -tracking-[3.5px]">
            <span className="text-green-500">Simplify</span> Inventory
            Management for Your Business
          </h1>

          <p className="text-gray-600 text-base leading-6 font-normal md:text-3xl md:leading-9">
            Start with a stunning homepage. Stay motivated without hurting your
            pocket.
          </p>

          <button className="btn-primary">Start Your Free Trial</button>
        </div>

        <figure className="relative w-full max-w-[857px]">
          <div className="relative">
            <Image
              src={Desktop}
              alt="Desktop dashboard"
              className="relative z-10 w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 857px"
            />
            <Image
              src={Mobile}
              alt="Mobile dashboard"
              className="absolute -right-5 md:-right-10 lg:-right-20 top-7 md:top-[70px] z-20 w-[106px] md:w-[180px] lg:w-[295px] h-auto"
              priority
              sizes="(max-width: 768px) 150px, (max-width: 1024px) 180px, 295px"
            />
          </div>
        </figure>
      </div>

      <div className="sticky w-full z-999">
        <div className="w-full bg-green-500 absolute left-0 right-0 bottom-24 h-28"></div>
      </div>
    </section>
  );
}
