import { useNavigate } from "react-router-dom";
import { useQuizContext } from "../../context/quiz-context";
import Button from "../button/Button";
import { useMemo } from "react";
import cypressConfig from "../../../cypress/support/commands";

interface StartScreenProps {
  testId?: string;
}

function StartScreen(props: StartScreenProps) {
  const { questions, dispatch } = useQuizContext();
  const navigate = useNavigate();
  const { testId } = props;
  const id = useMemo(
    () => (cypressConfig.isTestingWithCypress ? "start-screen-testId" : testId),
    [testId]
  );

  const onClick = () => {
    dispatch({ type: "startQuiz" });
    navigate("/quiz-started", { replace: true });
  };

  return (
    <section
      data-testid={id}
      className="flex flex-col p-6 border-2 border-blue-300 rounded-3xl"
    >
      <h3 className=" mb-16 font-semibold text-heading-h3">
        Welcome to The React Quiz
      </h3>
      <h4 className="sm:text-heading-h4 text-3xl font-semibold m-heading-mb">
        {questions.length} questions to test your React mastery
      </h4>
      <Button
        action={onClick}
        className="m-auto border-2 border-light hover:border-theme hover:bg-dark"
        type="startQuiz"
      >
        <span>Let's start</span>
      </Button>
    </section>
  );
}

export default StartScreen;
