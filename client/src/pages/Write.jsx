import { useState } from "react";
import RichEditor from "../components/TextEditor";

export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const saveDraft = () => {
    console.log("SAVE DRAFT", { title, content });
    alert("Draft simulated (check console)");
  };

  const publish = () => {
    console.log("PUBLISH", { title, content });
    alert("Publish simulated (check console)");
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-6xl mx-auto px-6 pb-20">
        <div className="bg-neutral-800 rounded-2xl p-10 mt-10 shadow-xl">
          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold">
              New Article
            </h1>

            <div className="flex gap-3">
              <button
                onClick={saveDraft}
                className="px-4 py-2 rounded-lg bg-neutral-700 hover:bg-neutral-600 text-sm"
              >
                Save Draft
              </button>

              <button
                onClick={publish}
                className="px-4 py-2 rounded-lg bg-yellow-400 hover:bg-yellow-300 text-black font-medium text-sm"
              >
                Publish
              </button>
            </div>
          </div>

          {/* TITLE */}
          <div className="mb-8">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={120}
              placeholder="Enter a title"
              className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-6 py-4 text-2xl outline-none focus:border-yellow-400"
            />

            <div className="text-right text-xs text-gray-400 mt-1">
              {title.length}/120
            </div>
          </div>

          {/* EDITOR */}
          <RichEditor onChange={setContent} />
        </div>
      </div>
    </div>
  );
}
