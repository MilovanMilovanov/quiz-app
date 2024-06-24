import { OptionsProps } from "../options/Options";

export default function Option(
  props: Omit<OptionsProps, "dispatch" | "questions">
) {
  const { option, index, answer, correctOption, onClick } = props;
  const hasAnswered = answer !== null;
  const isCorrectAnswer = hasAnswered && index === correctOption;
  const isWrongAnswer =
    hasAnswered && answer === index && index !== correctOption;

  const buttonClassNames = [
    "btn w-full sm:py-5 py-3 text-left ease-in-out duration-300",
    "hover:text-light hover:from-dark hover:to-dark hover:translate-x-7",
    "bg-gradient-to-r from-[blueviolet] to-purple text-light border-2 border-purple",
    isCorrectAnswer &&
      "from-theme to-theme border-theme text-light animate-blink",
    isWrongAnswer &&
      "translate-x-8 from-red-600 to-red-600 text-light border-red-600",
    hasAnswered && "pointer-events-none",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <li
      role="button"
      className={buttonClassNames}
      onClick={() => onClick?.(index)}
    >
      {option}
    </li>
  );
}
