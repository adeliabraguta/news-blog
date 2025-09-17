import { z } from "zod";

export const loginSchema = z.object({
	login: z.string().min(1, "Required"),
	password: z.string().min(1, "Required"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const registerSchema = z.object({
	name: z.string().min(1, "Required"),
	login: z.string().min(1, "Required"),
	password: z.string().min(1, "Required"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;
