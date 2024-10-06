import { z } from "zod";

export const usernameValidataion = z
  .string()
  .min(2, "User Name must be atleast 2 charaters")
  .max(20, "User Name must be no more than 20 charaters")
  .regex(/^[a-zA-Z0-9]+$/, "User name must not be contain special characters");

export const signUpSchema = z.object({
  username: usernameValidataion,
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 character" }),
});
