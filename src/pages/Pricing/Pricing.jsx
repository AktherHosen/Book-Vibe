import React from "react";

const Pricing = () => {
  return (
    <section className="py-5">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="font-bold tracking-wider uppercase text-[#34495e] ">
            Pricing
          </span>
          <h2 className="text-4xl font-bold lg:text-5xl">
            Choose your best plan
          </h2>
        </div>
        <div className="flex flex-wrap items-stretch -mx-4">
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8  bg-[#16a085] text-white">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Beginner</h4>
                <span className="text-6xl font-bold">Free</span>
              </div>
              <p className="mt-3 leading-relaxed">
                Free Your Mind with a World of Knowledge
              </p>
              <ul className="flex-1 mb-6">
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Explore classic and contemporary literature.</span>
                </li>
                <li className="flex mb-2 space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>No subscription fees, no hidden costs.</span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#16a085] border"
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#34495e] text-white">
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Pro</h4>
                <span className="text-6xl font-bold">
                  $24
                  <span className="text-sm tracking-wide">/month</span>
                </span>
              </div>
              <p className="leading-relaxed">
                Free Your Mind with a World of Knowledge
              </p>
              <ul className="flex-1 space-y-2">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Everything in Free</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Unlock exclusive content and premium features.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Enjoy ad-free reading experience.</span>
                </li>
              </ul>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-[#34495e]  text-violet-400 border"
              >
                Get Started
              </a>
            </div>
          </div>
          <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
            <div
              className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-[#16a085] text-white
            "
            >
              <div className="space-y-2">
                <h4 className="text-2xl font-bold">Team</h4>
                <span className="text-6xl font-bold">
                  $72
                  <span className="text-sm tracking-wide">/month</span>
                </span>
              </div>
              <p className="leading-relaxed ">
                Free Your Mind with a World of Knowledge
              </p>
              <ul className="space-y-2 ">
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Includes everything in the Pro tier.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Collaborative tools for group discussions.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="flex-shrink-0 w-6 h-6 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Start your literary journey today!</span>
                </li>
              </ul>
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-[#16a085] border"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
