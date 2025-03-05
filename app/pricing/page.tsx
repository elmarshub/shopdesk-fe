import React from "react";

const Page = () => {
  const sharedClassNames: string =
    "py-4 px-6 font-[500] font-['Circular_Std'] text-[14px] leading-[24px] box-border rounded-[6px] flex items-center h-[44px]";
  return (
    <section className="w-screen bg-[#fafafb] h-dvh -ml-[clamp(25px,5vw,120px)] pt-[96px] pb-[61px] flex flex-col items-center gap-[48px] font-['Circular_Std']">
      <div className="flex flex-col gap-[24px] items-center">
        <h2 className="font-[500] text-[60px] leading-[120%] max-w-[30ch] text-center text-[#2a2a2a]">
          Simple, Transparent Pricing for Every Business
        </h2>
        <p className="text-center font-[400] text-[#717171] text-[20px] leading-[150%]">
          Choose a plan that fits your business needs. No hidden fees, cancel
          anytime.
        </p>
      </div>
      <div className="flex p-[10px] rounded-[16px] items-center bg-[#f1f1f1] w-[227px] h-[64px]">
        <button
          className={`text-white bg-[#2a2a2a] border-[1px] border-[#1b1b1b] w-[102px] ${sharedClassNames}`}
        >
          Monthly
        </button>
        <button className={`${sharedClassNames} h-[44px] text-[#2a2a2a]`}>Annually</button>
      </div>
    </section>
  );
};

export default Page;
