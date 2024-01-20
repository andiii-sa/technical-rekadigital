import React from "react";

const Badges = ({ type, text, className }) => {
  let badgesTypes = "bg-gray-200 text-black";

  switch (type) {
    case "orange":
      badgesTypes =
        "bg-[#FEFBF6] [&>div]:bg-clip-text [&>div]:text-transparent [&>div]:bg-gradient-to-r [&>div]:from-[#EEA849] [&>div]:to-[#F46B45]";
      break;
    case "blue":
      badgesTypes =
        "bg-[#F6FCFE] [&>div]:bg-clip-text [&>div]:text-transparent [&>div]:bg-gradient-to-r [&>div]:from-[#56CCF2] [&>div]:to-[#2F80ED]";
      break;
    case "green":
      badgesTypes =
        "bg-[#F6FEF9] [&>div]:bg-clip-text [&>div]:text-transparent [&>div]:bg-gradient-to-r [&>div]:from-[#38EF7D] [&>div]:to-[#11998E]";
      break;
    case "violet":
      badgesTypes =
        "bg-[#FEF5FF] [&>div]:bg-clip-text [&>div]:text-transparent [&>div]:bg-gradient-to-r [&>div]:from-[#E100FF] [&>div]:to-[#7F00FF]";
      break;

    default:
      break;
  }

  return (
    <div
      className={`rounded py-2 px-6 font-bold text-sm ${badgesTypes} ${className}`}
    >
      <div>{text}</div>
    </div>
  );
};

export default Badges;
