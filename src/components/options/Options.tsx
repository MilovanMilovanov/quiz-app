import { Dispatch, memo, useMemo } from "react";
import { QuestionData } from "../../constants/InitialQuizState";
import { QuizAction } from "../../reducers/quizReducer";
import Option from "../option/Option";
import cypressConfig from "../../../cypress/support/commands";

export interface OptionsProps {
  index: number;
  answer: number | null;
  questions: QuestionData[];
  option?: string;
  correctOption?: number;
  testId?: string;
  dispatch: Dispatch<QuizAction>;
  onClick?: (index: number) => void;
}

export default memo(function Options(props: OptionsProps) {
  const { questions, index, answer, dispatch } = props;
  const { options, correctOption } = questions.at(index)!;
  const { testId } = props;
  const id = useMemo(
    () => (cypressConfig.isTestingWithCypress ? "options-testId" : testId),
    [testId]
  );

  const onClick = (index: number) => {
    const isCorrectAnswer = answer !== null && index === correctOption;
    dispatch({
      type: "newAnswer",
      payload: { index, correctOption: isCorrectAnswer },
    });
  };

  return (
    <ul data-testid={id} className="flex flex-col gap-5 mb-12">
      {options.map((option, index) => (
        <Option
          key={option}
          {...{ option, index, correctOption, answer, onClick }}
        />
      ))}
    </ul>
  );
});
