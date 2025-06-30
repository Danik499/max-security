import React from "react";

interface Props {
  image?: () => React.ReactNode;
}

export default function Avatar({ image }: Props) {
  return (
    <div className="w-8 h-8 flex items-center justify-center bg-[var(--grey-100)] grey-border rounded-[8px]">
      {image && image()}
    </div>
  );
}
