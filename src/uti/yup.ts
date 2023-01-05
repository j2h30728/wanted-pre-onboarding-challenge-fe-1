import * as yup from "yup";

export const authSchma = yup.object({
  email: yup.string().required("이메일을 입력해주세요."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 최소 8자리 이상입니다."),
});
export const todoSchma = yup.object({
  title: yup.string().required("할 일을 입력해주세요."),
  content: yup.string().notRequired(),
});
