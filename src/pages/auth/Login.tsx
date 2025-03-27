import { useForm } from "react-hook-form";
import InputBlock from "../../components/app/form/InputBlock";
import InputField from "../../components/app/form/InputField";
import LabelField from "../../components/app/form/LabelFiled";
import InputError from "../../components/app/form/InputError";
import ButtonMain from "../../components/app/button/ButtonMain";
import { Link, useNavigate } from "react-router-dom";
import { LoginService } from "../../service/LoginService";
import toast from "react-hot-toast";

interface LoginFormInputs {
    username: string;
    password: string;
}

const Login = () => {
  const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>();

    const onSubmit = (data: LoginFormInputs) => {
        console.log("Login Data:", data);
        try {
          const userData = LoginService({...data})
          if(userData.success) {
            toast.success(userData.message)
            navigate("/dashboard")
          } else {
            toast.error(userData.message)
          }
        } catch (error) {
          toast.error("Something Went Wrong")
          console.log(error)
        }
    };

    return (
        <div className="card-auth mx-auto">
            <div className="card-body">
                <h1 className="text-center">Login</h1>
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
                    <ButtonMain label="Login" type="submit" />
                </form>
                <Link
                    to="/auth/register"
                    style={{
                        marginTop: "1rem",
                        display: "block",
                        textAlign: "center",
                    }}>
                    Belum Punya Akun ?
                </Link>
            </div>
        </div>
    );
};

export default Login;
