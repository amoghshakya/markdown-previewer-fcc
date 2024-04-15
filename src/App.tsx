import Editor from "./components/Editor";
import "./App.css";
import Preview from "./components/Preview";
import { useState } from "react";
import { initialMarkdown } from "./constants";


function App() {
  const [text, setText] = useState<string>(initialMarkdown);
  return (
    <main>
      <Editor text={text} setText={setText} />
      <Preview text={text}/>
    </main>
  );
}

export default App;
