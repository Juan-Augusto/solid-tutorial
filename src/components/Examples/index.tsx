import { CodeSnippet } from "@/pages/examples/components/codeSnippet";
import { codeExamples } from "./constants/codeExamples";

interface PrincipleDetailsProps {
  path: string;
}
export const PrincipleDetails = ({ path }: PrincipleDetailsProps) => {
  return (
    <div className="p-12">
      O que não fazer:
      {codeExamples.map((codeExample, index) => {
        if (codeExample.path !== path) return null;
        else {
          return (
            <>
              <CodeSnippet key={index}>{codeExample.wrongExample}</CodeSnippet>
              <p>{codeExample.description}</p>
              <p>{codeExample.howToFix}</p>
              <CodeSnippet>{codeExample.correctedExample}</CodeSnippet>
              <ul>
                {codeExample.improvements.map((improvement, index) => {
                  return <li key={index}>- {improvement}</li>;
                })}
              </ul>
            </>
          );
        }
      })}
    </div>
  );
};
