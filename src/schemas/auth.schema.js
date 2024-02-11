import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters"),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must be less than 16 characters"),
  // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  // .regex(/[0-9]/, "Password must contain at least one number")
  // .regex(
  //   /[^a-zA-Z0-9]/,
  //   "Password must contain at least one special character"
  // ),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email address",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters"),
});
