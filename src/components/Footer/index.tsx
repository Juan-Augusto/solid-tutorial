import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full bg-slate-900 p-4">
      Sinta-se a vontade para contribuir com o projeto no&nbsp;
      <Link
        href="#"
        className="
        underline 
        hover:text-gray-400 transition duration-300 ease-in-out
      "
      >
        GitHub
      </Link>
    </footer>
  );
};
