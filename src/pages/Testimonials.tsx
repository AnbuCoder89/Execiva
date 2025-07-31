import React, { useState, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

// -------------------------
// Testimonials Data
// -------------------------
const testimonialList = [
  {
    author: {
      fullName: "Julie Rosie",
      picture:
        "https://cdn.easyfrontend.com/pictures/testimonial/testimonial_11.webp",
      designation: "Founder / CEO",
    },
    rating: 4.5,
    description:
      "Working with Execiva has been a game-changer for our business. Their data analytics solutions provided insights we never knew existed.",
  },
  {
    author: {
      fullName: "Raima Sen",
      picture: "https://cdn.easyfrontend.com/pictures/users/user3.jpg",
      designation: "HR Manager",
    },
    rating: 5,
    description:
      "The team's expertise in web development is unmatched. They delivered our project ahead of schedule and exceeded our expectations.",
  },
  {
    author: {
      fullName: "Alex Johnson",
      picture: "https://cdn.easyfrontend.com/pictures/users/user11.jpg",
      designation: "Marketing Director",
    },
    rating: 4.5,
    description:
      "Their technology consulting helped us streamline our operations and improve efficiency across all departments. Highly recommended!",
  },
];

// -------------------------
// Rating Component
// -------------------------
const Rating = ({ rating, showLabel, className = "", ...rest }: any) => (
  <p className={classNames("mb-6", className)} {...rest}>
    <span>
      {[...Array(5)].map((_, i) => {
        const index = i + 1;
        let content = null;
        if (index <= Math.floor(rating)) {
          content = (
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
          );
        } else if (rating > i && rating < index + 1) {
          content = (
            <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
          );
        } else {
          content = (
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-200 dark:text-opacity-20"
            />
          );
        }
        return <Fragment key={i}>{content}</Fragment>;
      })}
    </span>
    {showLabel && <span className="ml-2">{rating.toFixed(1)}</span>}
  </p>
);

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  showLabel: PropTypes.bool,
  className: PropTypes.string,
};

// -------------------------
// Testimonials Component
// -------------------------
const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { author, description, rating } = testimonialList[index];

  const handleControl = (type: "prev" | "next") => {
    setIndex((prev) =>
      type === "prev"
        ? prev <= 0
          ? testimonialList.length - 1
          : prev - 1
        : prev >= testimonialList.length - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <section className="ezy__testimonial13 light relative py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white z-[1]">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center text-center mb-6 lg:mb-12">
          <div className="max-w-md">
            <h2 className="text-3xl leading-none md:text-[45px] font-bold mb-6">
              Community Reviews
            </h2>
            <p>
              Real feedback from real clients — their success speaks for itself.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-1" />
          <div className="col-span-12 lg:col-span-5 text-center">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <img
                src={author.picture}
                alt={author.fullName}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-5" />
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <div className="bg-white shadow-xl dark:bg-slate-800 mt-4 lg:-mt-48 p-6 md:py-12 min-h-[320px]">
              <div className="md:px-6">
                <h3 className="text-3xl font-medium mb-2">{author.fullName}</h3>
                <p className="text-sm text-gray-400 mb-4">{author.designation}</p>
                <Rating rating={rating} showLabel={false} />
                <p className="text-base">{description}</p>
              </div>
              <div className="md:px-6 mt-12">
                <button
                  className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200 mr-3"
                  onClick={() => handleControl("prev")}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className="w-10 h-10 text-[12px] bg-transparent border border-slate-400 dark:border-slate-600 rounded-full inline-flex items-center justify-center duration-150 hover:bg-slate-400 hover:text-slate-800 dark:hover:bg-slate-700 dark:hover:text-slate-200"
                  onClick={() => handleControl("next")}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
