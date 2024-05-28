"use client";
import React, { useState } from "react";

export const ChildrenLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  // const { isOpen } = useStore();
  return (
    <main className="h-screen">
      <div
        className={`
      ${
        open
          ? "min630:left-[256px] min630:w-[calc(100%-256px)]"
          : "min630:left-[84px] min630:w-[calc(100%-84px)]"
      } relative left-0 w-full top-[60px] min-h-[calc(100%-60px)] duration-500 p-[24px] pl-[24px] pb-[28px] 
      `}
      >
        <div className="flex flex-col items-center pb-[6px] overflow-x-auto">
          <div className="w-full max-w-[1624px]">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default ChildrenLayout;
