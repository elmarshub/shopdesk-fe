import React from "react";
import Logo from "@/components/functional/logo";
import twitter from "@/public/icons/twitter.svg";
import facebook from "@/public/icons/facebook.svg";
import instagram from "@/public/icons/instagram.svg";
import logo from "@/public/icons/logo.svg";
import play from '@/public/coming-soon/Icon.svg'
import Image from "next/image";

const Page = () => {
  const socialLinkButtonClass: string =
    "w-[40px] h-[40px] bg-white border-[1px] rounded-full border-[#d0d0d0] inline-flex justify-center items-center";
  const sharedClass: string = "flex flex-col items-center";
  return (
    <>
      <header className="h-20 flex items-center justify-between px-[70px] mb-[106px]">
        <Logo />
        <div className="space-x-8">
          <button className={socialLinkButtonClass}>
            <Image src={twitter} alt="our twitter page" height={24} />
          </button>
          <button className={socialLinkButtonClass}>
            <Image src={facebook} alt="our facebook page" height={24} />
          </button>
          <button className={socialLinkButtonClass}>
            <Image src={instagram} alt="our instagram page" height={24} />
          </button>
        </div>
      </header>
      <section className={`${sharedClass} gap-16 w-full mb-[61px]`}>
        <div className={`${sharedClass} gap-3`}>
          <h2 className="text-center p-5 backdrop-blur-[200px] text-black rounded-[500px] text-6xl leading-[100%] font-[700] max-w-[27ch]">
            The Future of{" "}
            <span className="text-[#009A49]">Retail Management</span> is Almost
            Here…
          </h2>
          <p className="text-center font-[500] text-[18px] leading-[100%] text-[#717171]">
            Something revolutionary is coming. Sign up to be the first to unlock
            it.
          </p>
        </div>
        <div className={`${sharedClass} gap-2.5 w-full`}>
          <form action="" className="flex items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email for early access…"
              className="w-[425px] h-[62px] p-4 border-[1px] border-[#A0A0A0] rounded-[9px] placeholder:text-[#D0D0D0] placeholder:text-[20px] placeholder:leading-[30px] placeholder:font-[450] font-[450] text-[20px] text-leading-[30px]"
            />
            <button className="rounded-[9px] bg-[#00802F] py-[12px] px-6 text-white text-[16px] leading-[24px] font-[500] h-[60px]">
              Get Early Access
            </button>
          </form>
          <p className="text-[#A0A0A0] text-[14px] leading-[100%] text-center font-[500]">
            We respect your privacy. No spam.
          </p>
        </div>
      </section>

      <section className="flex justify-center pt-[24px] items-center mb-[62px]">
        <div
          className="w-[1003px] h-[613px] rounded-[24px] outline-[20px] outline-[#00000080] relative bg-cover flex flex-col items-center justify-between pt-5"
          style={{
            backgroundImage:
              "linear-gradient(#000000B2, #000000B2), url('/coming-soon/coming-soon.jpeg')",
          }}
        >
          <div className="flex gap-2 items-start">
            <Image src={logo} alt="shop desk logo" priority width={20} />
            <p className="text-[17px] text-white font-[500]">ShopDesk</p>
          </div>
          <div className="rounded-[12px] p-3 flex items-center bg-[#00000066] h-[53.5px] w-[53.5px] my-auto">
            <Image src={play} alt="play button" width={30} priority  />
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <footer></footer>
    </>
  );
};

export default Page;
