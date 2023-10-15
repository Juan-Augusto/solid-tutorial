// interface CardProps {
//   title: string;
//   description: string;
//   image: string;
//   link: string;
// }

import { ArrowLeft } from "@/icons/arrowRight";
import Link from "next/link";

export const Card = ({
  title = "",
  description = "",
  buttonDescription = "Saber mais",
  image = "",
  link = "",
  target = "_blank",
}) => {
  return (
    <div
      className="
      p-6 
      bg-white border 
      border-gray-200 
      rounded-lg shadow 
      dark:bg-gray-800 
      dark:border-gray-700 
      m-2
      hover:bg-gray-900 transition duration-300 ease-in-out hover:scale-110
      "
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">
        {description}
      </p>
      <Link
        href={link}
        target={target}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {buttonDescription}
        <ArrowLeft />
      </Link>
    </div>
  );
};
