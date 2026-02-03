import type { PropsWithChildren } from "react";

interface OutlinedButtonProps extends PropsWithChildren { }

export function OutlinedButton(props: OutlinedButtonProps) {
  return (
    <button
      className="
      border border-purple-600
      text-purple-600 
      flex items-center justify-center 
      gap-2 text-sm
       
      px-4 py-2 w-full
      rounded-lg shadow-lg shadow-purple-200/50
      cursor-pointer
      hover:bg-purple-200 transition-all
    ">
      {props.children}
    </button>
  );
}