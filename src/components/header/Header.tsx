import { memo } from "react";
import Logo from "../logo/Logo";

export interface HeaderProps {
  status?: string;
  testId?: string;
}

export default memo(function Header(props: HeaderProps) {
  const { status, testId } = props;
  return (
    <header
      data-testid={testId}
      className="w-full pl-4 pr-8 flex items-center justify-between ease-in-out duration-700 mb-heading-mb "
    >
      <Logo testId="svg-logo" status={status} />
      <h1 className="text-blue-300 font-semibold font-codystar italic sm:text-heading-h1 text-5xl">
        The React Quiz
      </h1>
    </header>
  );
});
