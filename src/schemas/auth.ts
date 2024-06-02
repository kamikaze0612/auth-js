import { object, string, minLength, email } from "valibot";
import type { Output } from "valibot";

export const LoginSchema = object({
  email: string([email()]),
  password: string([minLength(1, "Password is invalid")]),
});

export type LoginSchema = Output<typeof LoginSchema>;

export const RegisterSchema = object({
  name: string(),
  email: string([email()]),
  password: string([minLength(6, "Password must be longer than 6 characters")]),
});
export type RegisterSchema = Output<typeof RegisterSchema>;
