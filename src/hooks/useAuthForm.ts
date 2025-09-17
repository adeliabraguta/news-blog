import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema, registerSchema } from "../features/auth/schemas.ts";

type AuthFormData = {
	name?: string;
	login: string;
	password: string;
};

export const useAuthForm = (isLoginMode: boolean) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid },
	} = useForm<AuthFormData>({
		resolver: zodResolver(isLoginMode ? loginSchema : registerSchema),
		mode: "onChange",
	});

	return { register, handleSubmit, reset, errors, isValid };
};
