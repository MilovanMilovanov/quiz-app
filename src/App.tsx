import { Navigate, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { useQuizContext } from "./context/quiz-context";
import { QuizStatus } from "./reducers/quizReducer";

import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Timer from "./components/timer/Timer";
import CustomError from "./components/error/Error";
import Loader from "./components/loader/Loader";

import "./App.css";
import QuizContainer from "./components/quiz-container/QuizContainer";

export default function App() {
  const { status, questions, index, answer, secondsRemaining, dispatch } =
    useQuizContext();
  const navigate = useNavigate();

  return (
    <>
      <section className="flex sm:min-w-[50rem] w-[40rem] flex-col items-center m-auto">
        <Header status={status} />
        <ErrorBoundary
          fallback={
            <CustomError
              error="There was an error fetching questions."
              name="failed-fetch-error"
            />
          }
        >
          <Suspense
            fallback={
              <Loader>
                <p>Loading questions...</p>
              </Loader>
            }
          >
            <QuizContainer />
          </Suspense>
        </ErrorBoundary>
        {status === QuizStatus.Active && (
          <Footer>
            <Timer />
            {index === questions.length ||
              (secondsRemaining === 0 && <Navigate to="/quiz-summary" />)}
            {answer !== null &&
              (index < questions.length - 1 ? (
                <Button
                  action={() => dispatch({ type: "nextQuestion" })}
                  className="float-right sm:py-6 py-4 sm:px-12 px-9 hover:border-2 hover:border-theme"
                  type="nextQuestion"
                >
                  <span>Next</span>
                </Button>
              ) : (
                <Button
                  action={() => {
                    dispatch({ type: "finishQuiz" });
                    navigate("/quiz-summary", { replace: true });
                  }}
                  className="float-right sm:py-6 py-4 sm:px-12 px-9 hover:border-2 hover:border-theme"
                >
                  <span>Finish</span>
                </Button>
              ))}
          </Footer>
        )}
      </section>
    </>
  );
}
