import { useMemo } from "react";
import cypressConfig from "../../../cypress/support/commands";
import { useQuizContext } from "../../context/quiz-context";
import Options from "../options/Options";

interface QuestionProps {
  testId?: string;
}

export default function Question(props: QuestionProps) {
  const { questions, index, answer, dispatch } = useQuizContext();
  const { question } = questions.at(index)!;
  const { testId } = props;
  const id = useMemo(
    () => (cypressConfig.isTestingWithCypress ? "question-testId" : testId),
    [testId]
  );

  return (
    <section>
      <h4
        data-testid={id}
        className="text-heading-h4 font-semibold m-heading-mb"
      >
        {question}
      </h4>
      <Options {...{ questions, index, answer, dispatch }} />
    </section>
  );
}
