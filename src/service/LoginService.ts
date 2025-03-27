import UserJson from "../data/User.json";

const dataUser = UserJson;
export const LoginService = ({
    username,
    password,
}: {
    username: string;
    password: string;
}) => {
    const user = dataUser.find(
        (user) => user.username === username && user.password === password
    );
    if (user) {
        localStorage.setItem("user", user.username);
        return { success: true, message: "Login successfully", data: user };
    } else {
        return { success: false, message: "Login failed", data: null };
    }
};

export const RegisterService = ({
    username,
    password,
}: {
    username: string;
    password: string;
}) => {
    const userExists = dataUser.some((user) => user.username === username);

    if (userExists) {
        return { success: false, message: "User already exists", data: null };
    }

    const newUser = { username, password };
    dataUser.push(newUser);

    return { success: true, message: "User registered successfully", data: newUser };
};

export const LogoutService = () => {
    localStorage.removeItem("user")
    return { success: true, message: "Logut successfully" };
}