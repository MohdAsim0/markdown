import { useState } from "react";
import Markdown from "react-markdown"

function ReactMarkdown() {
  const [markdown, setMarkDown] = useState("markdown Here we come");
  return (
    <>
      <h1 style={{textAlign:"center"}}>Markdown editor</h1>
      <div className="center-div">
        <textarea
          className="left-side"
          value={markdown}
          onChange={(e) => setMarkDown(e.target.value)}></textarea>

        <div className="right-side">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </>
  );
}

export default ReactMarkdown