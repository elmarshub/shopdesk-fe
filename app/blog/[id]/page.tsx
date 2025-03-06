"use client";

import React from "react";
import Image from "next/image";
import shopdeskLogo from "@/public/icons/logo.svg";
import headerImg from "@/public/people-office-work-day 1.png";
// import { useParams } from "next/navigation";

const Page = () => {
  // const { id } = useParams();

  return (
    <div className="w-full md:w-[1199px] m-auto text-[#2A2A2A]">
      {/* <h1>This is Blog {id}</h1> */}

      {/* shopdesk mini header */}
      <div className="w-[94%] border-b flex gap-2 pb-2 my-5">
        <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center bg-[#F1F1F1]">
          <Image src={shopdeskLogo} alt="Shopdesk Logo" />
        </div>
        <div className="">
          <h5>Shopdesk</h5>
          <p className="text-[#717171]">17 Feb 2025</p>
        </div>
      </div>

      {/* Header */}

      <div className="w-[1199px] text-[#414141]">
        <h2 className="text-5xl">
          Simplify Your Product Management with Shopdesk
        </h2>
        <div className="flex items-center gap-1.5 text-xl my-2">
          <p>Inventory Management</p>
          <span className="bg-[#80CCA4] w-1.5 h-1.5 rounded-full"></span>
          <span>3 min read</span>
        </div>

        {/* Header img */}
        <div className="bg-pink-300 w-full h-802px">
          <Image src={headerImg} alt="Three people high fiving" />
        </div>
      </div>

      {/* content */}
      <div className=" w-full md:w-[958px] mx-auto flex flex-col gap-5 mt-14">
        <section className="w-full flex flex-col gap-4">
          <h3 className="text-[32px] font-medium text-[#1B1B1B]">
            Introduction
          </h3>
          <p>
            As your business grows, managing orders efficiently becomes a
            challenge. Delays, miscommunication, and stock issues can lead to
            unsatisfied customers and lost sales. That's where Shopdesk comes
            in—providing a seamless order management system that keeps your
            business running smoothly.
          </p>
          <p>
            Whether you're handling a few orders a day or managing a high-volume
            store, a structured, automated approach can save time, reduce
            errors, and improve customer satisfaction. Here's how Shopdesk makes
            order management effortless.
          </p>
        </section>

        <section className="flex flex-col gap-4">
          <h3 className="text-[28px] font-medium text-[#1B1B1B]">
            1. Centralized Order Tracking
          </h3>
          <p>
            With Shopdesk, you no longer need to juggle multiple platforms or
            manually log orders. Every order—whether from your online store,
            in-person sales, or bulk orders—is automatically recorded in a
            central dashboard.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-circular-bold">
                Real-time Order Updates
              </span>{" "}
              - Instantly view new, pending, and completed orders.
            </li>
            <li>
              <span className="font-circular-bold">
                Order Status Management
              </span>{" "}
              - Easily update and track progress &#93;Processing, Shipped,
              Delivered, etc.&#93;.
            </li>
            <li>
              <span className="font-circular-bold">Search & Filter</span> -
              Quickly locate orders by customer name, date, or product.
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-[28px] font-medium text-[#1B1B1B]">
            2. Automated Invoicing & Receipts
          </h3>
          <p>
            With Shopdesk, you no longer need to juggle multiple platforms or
            manually log orders. Every order—whether from your online store,
            in-person sales, or bulk orders—is automatically recorded in a
            central dashboard.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-circular-bold">
                Real-time Order Updates
              </span>{" "}
              - Instantly view new, pending, and completed orders.
            </li>
            <li>
              <span className="font-circular-bold">
                Order Status Management
              </span>{" "}
              - Easily update and track progress &#93;Processing, Shipped,
              Delivered, etc.&#93;.
            </li>
            <li>
              <span className="font-circular-bold">Search & Filter</span> -
              Quickly locate orders by customer name, date, or product.
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-4">
          <h3 className="text-[28px] font-medium text-[#1B1B1B]">
            3. Efficient Payment Processing
          </h3>
          <p>
            With Shopdesk, you no longer need to juggle multiple platforms or
            manually log orders. Every order—whether from your online store,
            in-person sales, or bulk orders—is automatically recorded in a
            central dashboard.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <span className="font-circular-bold">
                Real-time Order Updates
              </span>{" "}
              - Instantly view new, pending, and completed orders.
            </li>
            <li>
              <span className="font-circular-bold">
                Order Status Management
              </span>{" "}
              - Easily update and track progress &#93;Processing, Shipped,
              Delivered, etc.&#93;.
            </li>
            <li>
              <span className="font-circular-bold">Search & Filter</span> -
              Quickly locate orders by customer name, date, or product.
            </li>
          </ul>
        </section>

        {/* conclusion */}
        <div className="px-8 py-6 bg-[#F4F6F9] rounded-[6px] my-5">
          <h3 className="text-[32px] font-medium mb-3 text-[#1B1B1B]">
            Conclusion
          </h3>
          <p>
            Managing orders manually is time-consuming and prone to errors. With
            Shopdesk's seamless order management system, you can streamline
            workflows, reduce processing time, and improve customer
            satisfaction—all from a single platform.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
