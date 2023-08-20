import { FormProvider, useForm } from "react-hook-form";
import QuestionForm from "./questionForm";

export default function QuestionGroup() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <QuestionForm />
    </FormProvider>
  )
}