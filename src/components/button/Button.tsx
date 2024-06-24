import { ReactNode, useMemo } from "react";
import cypressConfig from "../../../cypress/support/commands";

export interface BtnProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  testId?: string;
  action?: () => void;
  type?: TypeBtn;
}

type TypeBtn = "restartQuiz" | "nextQuestion" | "finishQuiz" | "startQuiz";

export default function Button(props: BtnProps) {
  const { action } = props;
  const { className, testId, type, children, disabled = false } = props;
  const id = useMemo(
    () => (cypressConfig.isTestingWithCypress ? `${type}-testId` : testId),
    [type, testId]
  );

  return (
    <button
      data-testid={id}
      onClick={action}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
    </button>
  );
}
