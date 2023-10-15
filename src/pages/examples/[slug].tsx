import { HeadingText } from "@/components/Typography";
import { examples } from "@/pages/examples/constants/examples";
import { useRouter } from "next/router";
import { CodeSnippet } from "./components/codeSnippet";
import { PrincipleDetails } from "@/components/Examples";
const DynamicExample = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      {examples.map((example, index) => {
        if (example.path === slug) {
          return (
            <div key={index} className="flex justify-center p-2 flex-col">
              <HeadingText content={example.title} />
              <PrincipleDetails path={slug} />
            </div>
          );
        }
      })}
    </>
  );
};

export default DynamicExample;
