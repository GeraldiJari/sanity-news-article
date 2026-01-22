import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";

export default function RichEditor({ onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // MATIKAN extension yang mau kita override manual
        link: false,
        underline: false,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: "Share your thoughts, keep it friendly...",
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none focus:outline-none min-h-[420px] px-6 py-5 text-lg",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div>
      {/* TOOLBAR */}
      <div className="flex flex-wrap gap-3 border border-neutral-700 rounded-t-xl px-4 py-3 bg-neutral-900">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className="px-2 py-1 hover:bg-neutral-700 rounded"
        >
          B
        </button>

        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className="px-2 py-1 hover:bg-neutral-700 rounded"
        >
          I
        </button>

        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className="px-2 py-1 hover:bg-neutral-700 rounded"
        >
          U
        </button>

        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className="px-2 py-1 hover:bg-neutral-700 rounded"
        >
          H2
        </button>

        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className="px-2 py-1 hover:bg-neutral-700 rounded"
        >
          • List
        </button>

        <button
          onClick={() => {
            const url = prompt("Enter URL");
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className="px-2 py-1 hover:bg-neutral-700 rounded"
        >
          Link
        </button>
      </div>

      {/* EDITOR AREA */}
      <div className="border border-t-0 border-neutral-700 rounded-b-xl bg-neutral-900">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
