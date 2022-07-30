import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import EditorContext from "../contexts/editorContext";
// dynamic import required for the editor component.
const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});
const Home: NextPage = () => {
  const [EditorInstance, setEditorInstance] = useState(null);
  const [Theme, setTheme] = useState("dark");
  useEffect(() => {
    if (EditorInstance) {
      // console.log(EditorInstance);
    }
  }, [EditorInstance]);

  return (
    <main className={`wrapper ${Theme}`}>
      <EditorContext.Provider value={EditorInstance}>
        <Editor setEditorInstance={setEditorInstance} theme={Theme} />
      </EditorContext.Provider>
    </main>
  );
};

export default Home;
