interface Props {
  size?: number;
  color?: string;
}

export default function Loader({ size = 32, color = "#000000" }: Props) {
  return (
    <div className="flex items-center justify-center py-10">
      <div
        className="animate-spin rounded-full"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(from 0deg, transparent, ${color})`,
          borderRadius: "50%",
          position: "relative",
        }}
      >
        <div
          className="absolute inset-1 bg-white rounded-full"
          style={{
            background: "white",
          }}
        />
      </div>
    </div>
  );
}
