import Image from 'next/image'
import React from 'react'
import logo from "@/public/icons/logo.svg";
import play from "@/public/coming-soon/Icon.svg";


const Hero = () => {

    const sharedClass: string = "flex flex-col items-center";
  
    return (
        <>
            <section
                className={`${sharedClass} gap-16 w-full md:mb-[61px] md:mt-[80px]`}
            >
                <div
                className={`${sharedClass} gap-8 md:w-8/10 w-full max-w-[876px] relative`}
                >
                <h2 className="text-center p-5 backdrop-blur-[200px] text-[#009A49] rounded-[500px] text-[40px] md:text-[60px] leading-[100%] font-[700]">
                    E-commerce Entrepreneurs {" "}
                    <span className='text-[#171717] text-[24px] md:text-[40px] block mt-2'>Take Control of Your Stock – Manage Inventory in One Click
                    </span>
                </h2>
                <p className="text-center font-[300] text-[18px] md:text-[24px] leading-[100%] text-[#5F5F5F]">
                Managing inventory and tracking stock records doesn’t have to be difficult. Shopdesk gives e-commerce entrepreneurs a simple yet powerful inventory management tool to track, update, and organize stock records with ease.
                </p>
                </div>
            </section>
            <section className="flex justify-center pt-[24px] items-center mb-[62px] mt-8 md:mt-0">
                <div
                    className="w-[min(80%,800px)] xl:w-[1003px] xl:h-[613px] rounded-[24px] outline-[10px] sm:outline-[15px]  lg:outline-[20px] outline-[#00000080] relative bg-cover aspect-[1003/613] xl:aspect-auto flex flex-col items-center justify-between pt-5"
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
                    <Image src={play} alt="play button" width={30} priority />
                    </div>
                </div>
            </section>        
        </>

  )
}

export default Hero