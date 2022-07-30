import { FC, useContext } from "react";
import EditorContext from "../contexts/editorContext";
import { replaceAll } from "@milkdown/utils";
type NoteItemProps = {
  data: any;
};

const NoteItem: React.FC<NoteItemProps> = (props: NoteItemProps) => {
  const editor = useContext(EditorContext);
  return (
    <li
      className="note-item p-2 text-stone-600 text-sm my-2 flex gap-2 items-center hover:bg-stone-200 rounded dark:text-stone-300 dark:hover:bg-stone-700"
      onClick={(e) => {
        if (editor) {
          (editor as any).action(replaceAll(props.data.content, true));
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="shrink-0"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
      <span className="truncate">{props.data.title}</span>
    </li>
  );
};

export default NoteItem;
