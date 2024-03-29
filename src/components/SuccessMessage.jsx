import React from "react";

function SuccessMessage(props) {
  return (
    <section>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white flex flex-col justify-between text-left h-screen pt-20 px-4 pb-8 md:p-12 md:h-auto md:w-[504px] md:rounded-3xl">
          <div>
            <img src={props.icon} className="h-[64px] w-[64px] mb-8" />

            <h1 className="font-bold text-4xl lg:text-5xl mb-8">
              Thanks for subscribing!
            </h1>

            <p>
              A confirmation email has been sent to{" "}
              <span className="font-bold">{props.email}</span>. Please open it
              and click the button inside to confirm your subscription.
            </p>
          </div>

          <button
            type="button"
            className="border bg-darkSlateGrey w-full py-3 rounded-lg text-white text-center font-bold leading-6 cursor-pointer hover:shadow-hsla-shadow hover:bg-gradient-to-b from-tomato via-redish to-red-500 md:my-6"
            onClick={() => {
              props.setSuccessModal(false);
            }}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </section>
  );
}

export default SuccessMessage;
