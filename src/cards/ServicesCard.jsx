import React from "react";

const ServicesCard = ({ props }) => {
  return (
    <div className="w-full max-w-[350px] h-auto rounded-xl bg-gradient-to-br from-[#1a1b53] via-[#020234] to-[#01011b] overflow-hidden group cursor-pointer flex-shrink-0 relative transition-all duration-300 hover:scale-105 shadow-lg shadow-black text-white">
      {/* Image Section */}
      <div className="w-full h-[200px] overflow-hidden bg-cover">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full py-5 px-5">
        <h1 className="font-[nebula] text-start text-2xl mb-3">
          {props.title}
        </h1>
        <div className="mt-2 space-y-1 text-base">
          {props.features.map((feature, index) => (
            <p key={index}>{feature}</p>
          ))}
        </div>

        {/* Button */}
        <div className="py-5 flex justify-center items-center">
          <button className="bg-gradient-to-br from-[#1a1b53] via-[#020234] to-[#01011b] py-3 px-5 rounded-full transition-all duration-300 hover:scale-105">
            Get Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
