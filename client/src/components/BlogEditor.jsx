import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-lg overflow-hidden text-slate-200">
      <div className="flex gap-2 border-b p-2">
        <button
          type="button"
          className="hover:cursor-pointer hover:text-slate-500"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </button>

        <button
          type="button"
          className="hover:cursor-pointer hover:text-slate-500"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>

        <button
          type="button"
          className="hover:cursor-pointer hover:text-slate-500"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          H2
        </button>

        <button
          type="button"
          className="hover:cursor-pointer hover:text-slate-500"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          List
        </button>
      </div>

      <div className="p-4 min-h-100">
        <EditorContent className="min-h-100 text-slate-200" editor={editor} />
      </div>
    </div>
  );
}
