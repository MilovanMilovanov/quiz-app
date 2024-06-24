import { useEffect } from "react";
import { useQuizContext } from "../../context/quiz-context";

interface TimerProps {
  testId?: string;
}
export default function Timer(props: TimerProps) {
  const { secondsRemaining, dispatch } = useQuizContext();
  const { testId } = props;

  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  const formattedMinutes = `${Math.floor(secondsRemaining! / 60)}`.padStart(
    2,
    "0"
  );
  const formattedSeconds = `${secondsRemaining! % 60}`.padStart(2, "0");

  return (
    <div
      className="float-left sm:py-6 py-5 sm:px-12 px-10 text-2xl text-medium border-2 border-slate-800 rounded-full"
      data-testid={testId}
    >
      {formattedMinutes}:{formattedSeconds}
    </div>
  );
}
