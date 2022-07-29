import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
// dynamic import required for the editor component.
const Editor = dynamic(() => import("../components/Editor"), {
  ssr: false,
});
const Home: NextPage = () => {
  const [EditorInstance, setEditorInstance] = useState(null);
  useEffect(() => {
    if (EditorInstance) {
      console.log(EditorInstance);
    }
  }, [EditorInstance]);

  return (
    <main className="wrapper">
      <Editor setEditorInstance={setEditorInstance} />
    </main>
  );
};

export default Home;
