import { useForm } from "react-hook-form";
import InputBlock from "../../components/app/form/InputBlock";
import InputField from "../../components/app/form/InputField";
import LabelField from "../../components/app/form/LabelFiled";
import InputError from "../../components/app/form/InputError";
import ButtonMain from "../../components/app/button/ButtonMain";
import { Link, useNavigate } from "react-router-dom";
import { RegisterService } from "../../service/LoginService";
import toast from "react-hot-toast";

interface RegisterFormInputs {
    username: string;
    password: string;
}

const Register = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormInputs>();

    const onSubmit = (data: RegisterFormInputs) => {
        console.log("Register Data:", data);
        try {
            const registerState = RegisterService({ ...data });
            console.log("Result:", registerState);
            if (registerState.success) {
                toast.success(registerState.message);
                navigate("/auth/login");
            } else {
                toast.error(registerState.message);
            }
        } catch (error) {
            toast.error("Something Went Wrong");
            console.log(error);
        }
    };

    return (
        <div className="card-auth mx-auto">
            <div className="card-body">
                <h1 className="text-center">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputBlock>
                        <LabelField title="Username" htmlFor="username" />
                        <InputField
                            id="username"
                            {...register("username", {
                                required: "Username is required",
                            })}
                        />
                        {errors.username && (
                            <InputError text={errors.username.message || ""} />
                        )}
                    </InputBlock>
                    <InputBlock>
                        <LabelField title="Password" htmlFor="password" />
                        <InputField
                            id="password"
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                    </InputBlock>
                    <ButtonMain label="Register" type="submit" />
                </form>
                <Link
                    to="/auth/login"
                    style={{
                        marginTop: "1rem",
                        display: "block",
                        textAlign: "center",
                    }}>
                    Sudah Punya Akun ?
                </Link>
            </div>
        </div>
    );
};

export default Register;
