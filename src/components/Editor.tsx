import { useEffect, FC, SetStateAction } from "react";
import { Editor, rootCtx, ThemeColor } from "@milkdown/core";
import { ReactEditor, useEditor } from "@milkdown/react";
import { gfm } from "@milkdown/preset-gfm";
import { nayu, nayuDark, nayuLight } from "../components/nayu-theme";
import { upload } from "@milkdown/plugin-upload";
import { emoji } from "@milkdown/plugin-emoji";
import { block } from "@milkdown/plugin-block";
import { clipboard } from "@milkdown/plugin-clipboard";
import { prism } from "@milkdown/plugin-prism";
import { history } from "@milkdown/plugin-history";
import { listener, listenerCtx } from "@milkdown/plugin-listener";
import { switchTheme } from "@milkdown/utils";

type MilkdownEditorProps = {
  setEditorInstance: SetStateAction<any>;
  theme: string;
};
const MilkdownEditor: React.FC<MilkdownEditorProps> = (
  props: MilkdownEditorProps
) => {
  const { editor, getInstance, getDom, loading } = useEditor((root) =>
    Editor.make()
      .config((ctx) => {
        ctx.set(rootCtx, root);
      })
      .use(nayu)
      .use(listener)
      .use(history)
      .use(emoji)
      .use(clipboard)
      .use(block)
      .use(upload)
      .use(prism)
      .use(gfm)
  );

  useEffect(() => {
    if (!loading) {
      const editor = getInstance();
      props.setEditorInstance(editor);
    }
  }, [getInstance]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const editor = getInstance();
    if (props.theme == "dark") {
      editor?.action(switchTheme(nayuDark));
    } else {
      editor?.action(switchTheme(nayuLight));
    }
  }, [props.theme, getInstance]);

  return <ReactEditor editor={editor} />;
};

export default MilkdownEditor;
