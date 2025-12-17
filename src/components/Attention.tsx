"use client";

import Image from "next/image";
import React, { ReactNode } from "react";

interface AttentionProps {
  message: ReactNode;
  variant?: "info" | "warning" | "error";
}

export default function Attention({ message, variant }: AttentionProps) {
  const [isVisible, setIsVisible] = React.useState(true);
  return (
    <div
      className={`w-full max-h-10 ${isVisible ? "visible" : "hidden"} ${
        variant === "warning"
          ? "bg-yellow-100 text-yellow-700 px-4 py-2 flex flex-row justify-between items-center"
          : ""
      }`}
    >
      <p className="text-sm">{message}</p>
      <button
        onClick={() => setIsVisible(false)}
        className="cursor-pointer"
      >
        <span>
          <Image
            src="/img/utils/close.svg"
            alt="Close"
            width={16}
            height={16}
          />
        </span>
      </button>
    </div>
  );
}
