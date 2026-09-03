import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Start writing...</p>",
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <EditorContent
        className="border rounded-lg p-4 min-h-100 text-slate-200"
        editor={editor}
      />
    </div>
  );
}
