import { useEffect, FC, SetStateAction } from "react";
import { Editor, rootCtx } from "@milkdown/core";
import { ReactEditor, useEditor } from "@milkdown/react";
import { gfm } from "@milkdown/preset-gfm";
import { nord } from "@milkdown/theme-nord";

type MilkdownEditorProps = {
  setEditorInstance: SetStateAction<any>;
};
const MilkdownEditor: React.FC<MilkdownEditorProps> = (
  props: MilkdownEditorProps
) => {
  const { editor, getInstance, getDom, loading } = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .use(nord)
      .use(gfm)
  );

  useEffect(() => {
    if (!loading) {
      const editor = getInstance();
      props.setEditorInstance(editor);
    }
  }, [getInstance]); // eslint-disable-line react-hooks/exhaustive-deps

  return <ReactEditor editor={editor} />;
};

export default MilkdownEditor;
