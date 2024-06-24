import { Dispatch, createContext, useContext, useReducer } from "react";
import { QuizProps, initialQuizState } from "../constants/InitialQuizState";
import quizReducer, { QuizAction } from "../reducers/quizReducer";

type QuizContextProps = QuizProps & { dispatch: Dispatch<QuizAction> };

const QuizContext = createContext<QuizContextProps>({
  ...initialQuizState,
  dispatch: () => undefined,
});

export default function QuizProvider({
  contextValue = initialQuizState,
  children,
}) {
  const [state, dispatch] = useReducer(quizReducer, contextValue);

  return (
    <QuizContext.Provider value={{ ...state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useQuizContext() {
  return useContext(QuizContext);
}
