export interface CustomErrorProps {
  error: string;
  name: string;
  testId?: string;
}

export default function CustomError(props: CustomErrorProps) {
  const { error, testId, name } = props;
  return (
    <div
      data-testid={testId}
      role="alert"
      aria-labelledby={name}
      className="relative text-center p-6 text-2xl font-medium bg-dark_red border border-light_red rounded-full animate-blink"
    >
      <span role="img" aria-label="Explosion emoji">
        💥
      </span>{" "}
      <span id={name}>{error}</span>
    </div>
  );
}
