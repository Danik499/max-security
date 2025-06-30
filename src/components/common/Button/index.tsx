"use client";

interface Props {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ title, onClick, disabled }: Props) {
  const disabledClass = disabled ? "bg-[var(--grey-300)]" : "bg-black";
  return (
    <button
      onClick={onClick}
      className={`text-sm font-medium text-white  px-[16px] py-[12px] rounded-lg cursor-pointer ${disabledClass}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
}
