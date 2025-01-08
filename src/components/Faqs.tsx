"use client";

import Image from "next/image";
import React, { useState } from "react";
import avatar1 from "../../assets/Avatar1.svg";
import avatar2 from "../../assets/Avatar2.svg";
import avatar3 from "../../assets/Avatar3.svg";
import zysk_plus from "../../assets/zysk_plus1.svg";
import zysk_minus from "../../assets/zysk_minus1.svg";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time, effective at the end of the current billing cycle.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can customize your invoice by adding extra information like VAT ID or company address.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is based on your chosen plan and is charged monthly or annually depending on your preference.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can update your account email from your account settings page.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mx-5">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 mt-4 mx-4">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b-2 border-gray-100 overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center sm:px-6 py-4 text-left text-gray-900 font-bold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="w-5">
                  {openIndex === index ? (
                    <Image src={zysk_minus} alt="" />
                  ) : (
                    <Image src={zysk_plus} alt="" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-500 font-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 p-6 rounded-lg text-center">
          <div className="flex justify-center items-end -space-x-4 mb-4">
            <Image
              src={avatar1}
              alt="avatar1"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border border-white z-10"
            />
            <Image
              src={avatar2}
              alt="avatar2"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full z-20"
            />
            <Image
              src={avatar3}
              alt="avatar3"
              width={48}
              height={48}
              className="w-12 h-12 rounded-full border border-white z-10"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Still have questions?
          </h3>
          <p className="text-gray-600 mt-2">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>
          <button className="mt-5 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
