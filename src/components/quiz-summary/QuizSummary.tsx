/* eslint-disable react-refresh/only-export-components */
import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../../context/quiz-context";
import Button from "../button/Button";
import cypressConfig from "../../../cypress/support/commands";
import { useMemo } from "react";

interface QuizSummaryProps {
  testId?: string;
}
interface Emojis {
  [index: string]: string;
}
export const emojis: Emojis = {
  excellent: "🥇",
  veryGood: "🎉",
  notGood: "🙃",
  bad: "🤨",
  veryBad: "🤦‍♂️",
};

const getEmoji = (percentage: number): string => {
  return percentage === 100
    ? emojis.excellent
    : percentage >= 80
    ? emojis.veryGood
    : percentage >= 50
    ? emojis.notGood
    : percentage > 0
    ? emojis.bad
    : percentage === 0
    ? emojis.veryBad
    : "";
};

export default function QuizSummary(props: QuizSummaryProps) {
  const { points, highscore, totalQuestionPoints, dispatch } = useQuizContext();
  const navigate = useNavigate();
  const { testId } = props;
  const percentage = (points / totalQuestionPoints) * 100;

  const emoji = getEmoji(percentage);

  const onClick = () => {
    dispatch({ type: "restartQuiz" });
    navigate("/quiz-started", { replace: true });
  };

  const id = useMemo(
    () => (cypressConfig.isTestingWithCypress ? "quiz-summary-testId" : testId),
    [testId]
  );

  return (
    <section data-testid={id}>
      <p
        role="status"
        className="text-center mb-6 py-8 px-6 text-3xl font-medium rounded-full bg-theme"
      >
        <span role="img" className="text-4xl mr-4">
          {emoji}
        </span>
        You scored <strong>{points}</strong> out of {totalQuestionPoints} (
        {Math.ceil(percentage)}%)
      </p>
      <p role="highscore" className="text-center mb-20 text-3xl">
        Highscore: <strong>{highscore} points</strong>
      </p>
      <Button
        action={onClick}
        className="m-auto border-2 border-light hover:border-theme hover:bg-dark"
        testId="restart-quiz-btn-testId"
        type="restartQuiz"
      >
        <span>Restart Quiz</span>
      </Button>
    </section>
  );
}
