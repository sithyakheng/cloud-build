export default function CornerMarks({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`corner-marks ${className}`}>{children}</div>;
}
