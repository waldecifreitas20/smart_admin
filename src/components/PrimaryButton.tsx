import type { PropsWithChildren } from "react";

interface PrimaryButtonProps extends PropsWithChildren { }

export function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      className="
      bg-purple-600 
      flex items-center justify-center 
      gap-2 text-sm
      text-white 
      px-4 py-2 w-full
      rounded-lg 
      cursor-pointer shadow-lg shadow-purple-500/50
      hover:bg-purple-700 transition-all
    ">
      {props.children}
    </button>
  );
}