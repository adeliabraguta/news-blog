import { TextField, type TextFieldProps } from "@mui/material";

type InputFieldProps = TextFieldProps & {
	name: string;
	label: string;
};
const AuthInputField = ({ name, label, ...props }: InputFieldProps) => {
	return (
		<div>
			<TextField id={name} name={name} size="small" label={label} variant="outlined" {...props} />
		</div>
	);
};

export default AuthInputField;
