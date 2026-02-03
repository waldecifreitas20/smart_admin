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
      px-4 py-3 w-full
      rounded-md 
      cursor-pointer
      hover:bg-purple-700 transition-all
    ">
      {props.children}
    </button>
  );
}