import Header from "@/components/functional/header";
import Image from "next/image";
import Desktop from "../public/icons/desktop-img.png";
import Desktop2 from "../public/icons/Desktop 2.png";
import Mobile from "../public/icons/mobile.png";
import Check from "../public/icons/check.png";
import Play from "../public/icons/play.png";

export default function Home() {
  return (
    <>
      <div className="relative">
        <div className=" flex flex-col items-center gap-8 pt-10 pb-5 max-w-[867px] mx-auto text-center">
          <h1 className="text-4xl leading-14 font-bold md:text-6xl md:leading-16 -tracking-[3.5px]">
            <span className="text-green-500">Simplify</span> Inventory
            Management for Your Business
          </h1>

          <p className="text-gray-600 text-base leading-6 font-normal md:text-3xl md:leading-9">
            Start with a stunning homepage. Stay motivated without hurting your
            pocket.
          </p>

          <button className="btn-primary">Start Your Free Trial</button>

          <figure className="max-w-[854px] mx-auto">
            <div className="relative">
              <Image
                src={Desktop}
                alt="Desktop dashboard"
                className="w-[283px] h-[232px] md:w-[857px] md:h-[500px]"
              />
              <Image
                src={Mobile}
                alt="Desktop dashboard"
                className="absolute top-[32px] -right-14 md:top-[70px] md:-right-24 w-[106px] h-[210px] md:w-[295px] md:h-[420px]"
              />
            </div>
          </figure>

          <div className="h-[115px] right-0 left-0 absolute bottom-1 bg-green-500 md:bottom-5"></div>
        </div>
      </div>

      <div className="mx-auto max-w-[1198px]">
        <h2 className="text-center py-3 font-medium leading-6 text-green-500">
          Key Features
        </h2>

        <div className="max-w-[1198px]  min-h-[405px] flex  items-center justify-between">
          <div className="flex flex-col gap-8">
            <span className="text-base leading-5 text-green-500 font-bold">
              Stock Inventory
            </span>

            <h1 className="text-[54px] font-bold leading-16">Inventory</h1>

            <p className="text-gray-600 text-base leading-[22px] max-w-[512px]">
              Manage your inventory with confidence and precision. Our intuitive
              stock inventory solution helps you track, organize, and optimize
              your products all in real time.
            </p>

            <ul className="flex flex-col gap-6 text-base leading-6">
              <li className="flex items-center gap-2">
                <span>
                  <Image src={Check} height={24} width={24} alt="" />
                </span>
                Automated Alerts
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image src={Check} height={24} width={24} alt="" />
                </span>
                Comprehensive Reporting
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <Image src={Play} height={24} width={24} alt="" />
                </span>
                Streamline Your Inventory Now
              </li>
            </ul>
          </div>

          <figure className="max-w-[622px]">
            <div className="w-full bg-[#FAFAFA] p-2 pt-5 pr-0 rounded-tl-[48px]">
              <Image
                src={Desktop2}
                alt="Desktop"
                className="md:w-[767px] md:h-[546px] overflow-hidden"
              />
            </div>
          </figure>
        </div>
      </div>
    </>
  );
}
