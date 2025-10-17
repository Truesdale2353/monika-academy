import React, { useState } from "react";

export const BottomSticky = ({ children }: { children?: React.ReactNode }) => {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      className="sticky bottom-10 mx-auto z-50 bg-[#5F68FF] text-slate-900 border border-gray-500 rounded-2xl shadow-xl p-4 relative md:w-3xl"
     style={{ width: window.innerWidth > 1024 ? "60vw" : "80vw" }}
      role="dialog"
      aria-modal="true"
      aria-label="Bottom notice"
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute text-white top-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-white hover:bg-[#5d52f7] focus:outline-none focus:ring-2 focus:ring-slate-400"
        aria-label="Close"
      >
        ×
      </button>
      <div style={{ width: "90%" }} className="text-center font-medium text-lg text-white">
              {children ?? (
        <span className="text-sm leading-relaxed">
          This is a sticky bottom panel. Add your content here.
        </span>
      )}
      </div>

    </div>
  );
}
