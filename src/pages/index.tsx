import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// dynamic import required for the editor component.
const Editor = dynamic(() => import("../components/Editor"), {
  suspense: true,
  ssr: false,
});

const Home: NextPage = () => {
  const [EditorInstance, setEditorInstance] = useState(null);
  useEffect(() => {
    if (EditorInstance) {
      console.log(EditorInstance);
    }
  }, [EditorInstance]);

  return <Editor setEditorInstance={setEditorInstance} />;
};

export default Home;
