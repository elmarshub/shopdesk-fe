import React from "react";

const contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Get in <span className="text-green-500">touch</span> with us today
        </h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          We’re here to help! Whether you have a question, need assistance, or
          want to provide feedback, we’d love to hear from you. Reach out to us
          by filling the form below.
        </p>
      </div>

      <form className="mt-8 space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none"
        ></textarea>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full sm:w-1/3 bg-black text-white p-3 rounded-lg font-semibold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default contact;
