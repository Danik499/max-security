"use client";

interface Props {
  title: string;
  onClick: () => void;
}

export default function Button({ title, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-sm font-medium text-white bg-black px-[16px] py-[12px] rounded-lg"
    >
      {title}
    </button>
  );
}
