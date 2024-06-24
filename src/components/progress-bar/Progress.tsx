import { useMemo } from "react";
import cypressConfig from "../../../cypress/support/commands";
import { useQuizContext } from "../../context/quiz-context";

interface ProgressBarProps {
  testId?: string;
}

export default function Progress(props: ProgressBarProps) {
  const {
    index,
    points,
    questions,
    answer,
    correctOption,
    prevHighscore,
    totalQuestionPoints,
  } = useQuizContext();
  const { testId } = props;
  const numQuestions = questions.length;
  const id = useMemo(
    () => (cypressConfig.isTestingWithCypress ? "progress-bar-testId" : testId),
    [testId]
  );

  return (
    <section
      data-testid={id}
      className="grid auto-cols-auto mb-6 sm:text-3xl text-2xl text-medium"
    >
      <progress
        className="appearance-none w-full sm:h-6 h-4 ease-in-out duration-100"
        max={numQuestions}
        value={index + Number(answer !== null)}
      />

      <div className="box-content flex justify-between p-1 h-8 bg-progress_bar_bg border-none p-2.5 rounded-b-lg text-progress_bar_color shadow-[inset_black_0px_0px_16px_-3px] ">
        <p role="status">
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>
        {prevHighscore ? (
          <span role="status" className="text-md text-gold">
            Score to beat {prevHighscore}
          </span>
        ) : (
          ""
        )}
        <p role="status" className="flex w-36">
          <strong
            className={
              correctOption
                ? "w-full ease-in-out duration-700 animate-[highlight_0.6s_linear,enlarge_0.4s_linear]"
                : "w-full"
            }
          >
            {points}
          </strong>
          <span>/</span>
          <span className="w-full">{totalQuestionPoints}</span>
        </p>
      </div>
    </section>
  );
}
