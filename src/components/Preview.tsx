import { marked } from "marked";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

function Preview({ text }: { text?: string }) {
  const [parsedString, setParsedString] = useState("");
  useEffect(() => {
    const parseString = async () => {
      const parsed = await marked.parse(text ?? "", {
        breaks: true,
        gfm: true,
      });

      setParsedString(DOMPurify.sanitize(parsed));
    };
    parseString();
  }, [text, parsedString]);

  return (
    <div className="wrapper">
      <div className="header">
        <h2 className="title">Preview</h2>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: parsedString }}
      ></div>
    </div>
  );
}

export default Preview;
