import Users from "../data/Users.json";

export const authenticateUser = (login: string, password: string) => {
	const user = Users.users.find((u) => u.login === login && u.password === password);
	return user || null;
};
