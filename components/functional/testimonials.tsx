"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Avatar1 from "@/public/testimonial-images/avatar1.png";
import Avatar2 from "@/public/testimonial-images/avatar2.png";
import Avatar3 from "@/public/testimonial-images/avatar3.png";

import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Jerome Bell",
    company: "Google",
    review:
      "“ShopDesk completely transformed the way we track inventory. The real-time stock updates ensure we never run out of our best-sellers”",
    image: Avatar1,
  },
  {
    id: 2,
    name: "Kristin Watson",
    company: "Netflix",
    review:
      "“We operate three stores, and ShopDesk keeps all our stock levels in sync. Now we always know what we have, without messy spreadsheets.”",
    image: Avatar2,
  },
  {
    id: 3,
    name: "Annette Black",
    company: "WhatsApp",
    review:
      "“We run multiple store locations, and ShopDesk keeps everything in sync. No more manual inventory checks—everything is automated!”",
    image: Avatar3,
  },
  /* {
    id: 4,
    name: "Alice Johnson",
    company: "Facebook",
    review:
      "“An intuitive interface and great customer support. Would definitely recommend!”",
    image: Avatar2,
  }, */
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth < 768 ? 1 : 3);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex < testimonialsData.length - visibleCards
        ? prevIndex + 1
        : prevIndex
    );
  };

  return (
    <div className="flex py-6 md:py-8 px-5 min-[600px]:px-10 flex-col items-center justify-center gap-6 mb-12 bg-[#19A45B]">
      {/* Navigation */}
      <div className="flex items-center justify-between w-full max-w-[343px] sm:max-w-[1200px]">
        <button
          onClick={prevSlide}
          className="p-3 md:p-4 bg-white border border-[#C7D3E1] rounded-xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M15 9.31055H3M3 9.31055L7.5 13.8105M3 9.31055L7.5 4.81055"
              stroke="#D0D0D0"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="py-3 px-6 rounded-4xl border border-[#00802F] bg-[#19A45B] text-white font-circular-normal leading-6">
          Testimonials
        </div>
        <button
          onClick={nextSlide}
          className="p-3 md:p-4 bg-[#001A00] rounded-xl cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M3.75 9.31055H14.25M14.25 9.31055L9 4.06055M14.25 9.31055L9 14.5605"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Testimonials Container */}
      <div className="relative flex justify-center items-stretch w-full max-w-[343px] sm:max-w-[1200px] overflow-hidden md:gap-6">
        <AnimatePresence>
          {testimonialsData
            .slice(index, index + visibleCards)
            .map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex w-full max-w-sm md:max-w-[384px] p-6 md:p-8 flex-col gap-5 rounded-2xl shadow-2xl bg-white"
              >
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimonial.image}
                      width={48}
                      height={48}
                      alt="avatar"
                    />
                    <div className="flex flex-col">
                      <p className="text-base font-medium">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#42526B]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-base font-light text-[#061C3D]">
                    {testimonial.review}
                  </p>
                  <div className="flex gap-1">
                    <Star color="#FF8800" fill="#FF8800" />
                    <Star color="#FF8800" fill="#FF8800" />
                    <Star color="#FF8800" fill="#FF8800" />
                    <Star color="#FF8800" fill="#FF8800" />
                    <Star color="#FF8800" fill="#FF8800" />
                  </div>
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
      <div className="flex gap-2.5">
        {testimonialsData.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full ${
              index === idx ? "bg-[#001A00] w-8" : "bg-[#CCEBDB]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
