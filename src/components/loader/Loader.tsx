import { ReactNode } from "react";

export interface LoaderProps {
  children: ReactNode;
  testId?: string;
}

export default function Loader(props: LoaderProps) {
  const { testId, children } = props;
  return (
    <div
      data-testid={testId}
      role="status"
      className="flex flex-col items-center mt-16 gap-y-2xl text-xl text-medium"
    >
      <div className="w-20 h-10 bg-gradient-radial bg-loader-size bg-no-repeat animate-loader"></div>
      {children}
    </div>
  );
}
