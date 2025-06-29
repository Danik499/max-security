interface Props {
  size?: number;
  color?: string;
}

export default function Loader({ size = 32, color = "black" }: Props) {
  return (
    <div className="flex items-center justify-center py-10">
      <div
        className="animate-spin rounded-full border-4 border-t-transparent"
        style={{
          width: size,
          height: size,
          borderColor: `${color} transparent transparent transparent`,
        }}
      />
    </div>
  );
}
