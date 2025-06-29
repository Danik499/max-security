import React from "react";

interface Props {
  image?: () => React.ReactNode;
}

export default function Avatar({ image }: Props) {
  return (
    <div className="w-10 h-10 flex items-center justify-center grey-bg grey-border rounded-[8px]">
      {image && image()}
    </div>
  );
}
