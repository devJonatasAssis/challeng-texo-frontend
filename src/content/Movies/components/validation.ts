import * as yup from "yup";

export const validationFilterMoviesSchema = yup.object({
  year: yup.number().required("Campo obrigatório"),
  winner: yup.string().required("Campo obrigatório"),
});
