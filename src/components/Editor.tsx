import { ChangeEvent } from "react";

function Editor({
  text,
  setText,
}: {
  text?: string;
  setText: (arg0: string) => void | string;
}) {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
    <div className="wrapper">
      <div className="header">
        <h2 className="title">Editor</h2>
        {/* <ArrowsPointingOutIcon className="resize-icon" /> */}
      </div>
      <textarea
        name="editor"
        id="editor"
        onChange={handleChange}
        value={text}
        aria-label="markdown editor"
      ></textarea>
    </div>
  );
}

export default Editor;
