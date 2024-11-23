"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [selectedReviews, setSelectedReviews] = useState(0);
  const filteredReview = reviews?.find((item, id) => selectedReviews === id);
  console.log(filteredReview);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="max-content-width section-padding-x section-padding-y bg-[#EAF2F8]">
      <SectionTitle text="Review From Our Patient" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-28 items-center mt-8 md:mt-16">
        <div className="flex flex-col gap-2.5">
          {reviews?.map((review, idx) => (
            <div
              onClick={() => setSelectedReviews(idx)}
              key={idx}
              className={`flex gap-3 items-center py-1 px-4 cursor-pointer ${
                selectedReviews === idx
                  ? "bg-white"
                  : "bg-[#ffffff] bg-opacity-30 hidden lg:flex"
              } rounded-lg`}
            >
              <div>
                <Image
                  alt="profile"
                  height={80}
                  width={80}
                  src={review.profile}
                  className="rounded-full h-12 w-12 md:h-20 md:w-20"
                />
              </div>
              <div>
                <h1 className="text-sm md:text-base font-semibold">
                  {review.name}
                </h1>
                <p className="text-[#6E6E6E] text-[12px] md:text-sm">
                  Happy Client
                </p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-between gap-5">
            <h1 className=" md:text-2xl font-semibold text-[#121212]">
              {filteredReview?.title}
            </h1>
            <FaQuoteRight className="text-[#3A8FB7] text-3xl md:text-5xl opacity-40" />
          </div>

          <div className="text-sm md:text-base mt-4 md:mt-8 flex flex-col gap-y-5 text-justify">
            <p>{filteredReview?.description}</p>
            <p>{filteredReview?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
