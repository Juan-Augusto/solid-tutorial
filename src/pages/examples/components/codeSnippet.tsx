import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);
import { useEffect } from "react";
export const CodeSnippet = ({ children }: any) => {
  useEffect(() => {
    hljs.initHighlighting();
  }, []);

  return (
    <div
      className="
      bg-gray-500
      border border-gray-200
      rounded-md
      text-sm
      font-mono
      overflow-x-auto
    "
    >
      <pre className="bg-slate-900">
        <code className="language-javascript">{children}</code>
      </pre>
    </div>
  );
};
