import { QuestionSnapshot } from "../../models"
import { GeneralApiProblem } from "./api-problem"

export type GetQuestionsResult = { kind: "ok"; questions: QuestionSnapshot[] } | GeneralApiProblem
