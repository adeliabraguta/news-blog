import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AuthButton from "../../components/UI/AuthButton.tsx";
import AuthInputField from "../../components/UI/AuthInputField.tsx";
import { useAuthForm } from "../../hooks/useAuthForm";
import { authenticateUser } from "../../services/authService";
import { useGlobalStore } from "../../store/globalStore.ts";
import type { LoginFormData, RegisterFormData } from "./schemas.ts";

const AuthComponent = () => {
	const { setUser } = useGlobalStore();
	const navigate = useNavigate();
	const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

	const { register, handleSubmit, reset, errors, isValid } = useAuthForm(isLoginMode);

	const onSubmit = (data: LoginFormData | RegisterFormData) => {
		if (isLoginMode) {
			const user = authenticateUser(data.login, data.password);
			if (user) {
				setUser(user.login);
				navigate("/");
				toast.success("Welcome");
				reset();
			} else {
				toast.error("Invalid credentials");
			}
		} else {
			setIsLoginMode(true);
			reset();
		}
	};

	const toggleMode = () => {
		setIsLoginMode(!isLoginMode);
		reset();
	};

	return (
		<div className="h-dvh bg-linear-to-r from-cyan-500 to-blue-500 flex justify-center items-center">
			<div className="bg-white p-8 rounded">
				<h2 className="text-center pb-6 text-2xl text-sky-600 font-semibold tracking-widest uppercase">
					{isLoginMode ? "Login" : "Register"}
				</h2>
				<form
					onSubmit={handleSubmit(onSubmit)}
					key={isLoginMode ? "login" : "register"}
					className="flex flex-col gap-3 justify-center items-center"
				>
					{!isLoginMode && (
						<AuthInputField label="Name" {...register("name")} error={!!errors.name} />
					)}
					<AuthInputField label="Login" {...register("login")} error={!!errors.login} />
					<AuthInputField label="Password" {...register("password")} error={!!errors.password} />
					<AuthButton
						type="submit"
						disabled={!isValid}
						text={isLoginMode ? "Log in" : "Register"}
					/>
					<p className="text-xs">
						{isLoginMode ? "Don't have an account yet?" : "Already have an account?"}
						<button type="button" className="text-sky-600 cursor-pointer ml-1" onClick={toggleMode}>
							{isLoginMode ? "Register" : "Log In"}
						</button>
					</p>
				</form>
			</div>
		</div>
	);
};

export default AuthComponent;
