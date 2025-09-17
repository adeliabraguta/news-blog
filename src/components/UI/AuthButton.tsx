import { Button, type ButtonProps } from "@mui/material";

type ButtonFieldProps = ButtonProps & {
	text: string;
};

const AuthButton = ({ text, ...props }: ButtonFieldProps) => {
	return (
		<div className={"text-center"}>
			<Button variant="contained" {...props}>
				{text}
			</Button>
		</div>
	);
};

export default AuthButton;
