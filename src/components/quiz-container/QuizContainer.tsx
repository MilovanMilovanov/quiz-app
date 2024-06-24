import { Routes, Route, useLocation } from "react-router-dom";
import { QuizStatus } from "../../reducers/quizReducer";
import Progress from "../progress-bar/Progress";
import Question from "../question/Question";
import QuizSummary from "../quiz-summary/QuizSummary";
import StartScreen from "../start-screen/StartScreen";
import { useEffect } from "react";
import fetchData from "../../api/fetchData";
import { useQuizContext } from "../../context/quiz-context";

interface QuizContainerProps {
  testId?: string;
}

const url = import.meta.env.VITE_APP_QUIZ_URL;
const resource = fetchData(url);

export default function QuizContainer(props: QuizContainerProps) {
  const { status, secondsRemaining, dispatch } = useQuizContext();
  const location = useLocation();
  const { testId } = props;
  const data = resource.read();

  useEffect(() => {
    if (Array.isArray(data)) {
      dispatch({ type: "dataReceived", payload: data });
    } else {
      dispatch({ type: "dataFailed" });
      throw new Error(data);
    }
  }, [data, dispatch]);

  useEffect(() => {
    if (location.pathname === "/quiz-started" && status === QuizStatus.Ready) {
      dispatch({ type: "startQuiz" });
    }
    if (location.pathname === "/quiz-summary") {
      dispatch({ type: "finishQuiz" });
    }
  }, [location, status, dispatch]);

  return (
    <main data-testid={testId} className="w-full p-5 pb-0">
      <Routes>
        <Route
          path="/"
          element={status === QuizStatus.Ready && <StartScreen />}
        />
        <Route
          path="/quiz-started"
          element={
            status === QuizStatus.Active && (
              <>
                <Progress />
                <Question />
              </>
            )
          }
        />
        <Route
          path="/quiz-summary"
          element={
            (status === QuizStatus.Finished || secondsRemaining === 0) && (
              <QuizSummary />
            )
          }
        />
        <Route
          path="*"
          element={
            <p
              role="status"
              className="flex justify-center flex-col gap-y-4 text-5xl text-medium font-medium "
            >
              <span className="text-7xl">404</span>
              <span>Invalid endpoint.</span>
            </p>
          }
        />
      </Routes>
    </main>
  );
}
