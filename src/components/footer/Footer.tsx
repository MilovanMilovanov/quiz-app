import { ReactNode } from "react";

export interface FooterProps {
  children: ReactNode;
  testId?: string;
}

export default function Footer(props: FooterProps) {
  const { children, testId } = props;
  return (
    <section data-testid={testId} className="w-full p-5">
      {children}
    </section>
  );
}
