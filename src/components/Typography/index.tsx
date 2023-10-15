interface TypographyProps {
  content: string;
}

export const HeadingText = ({ content }: TypographyProps) => {
  return (
    <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      {content}
    </h1>
  );
};
