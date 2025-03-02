import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { client } from "../../../lib/axios.js";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        setServerError("");

        try {
            const response = await client.post("/api/user/login", data);
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate("/");
        } catch (error) {
            const message = error.response?.data?.message || "Something went wrong";
            setServerError(message);

            if (message === "User not found") {
                alert("No account found, please sign up!");
                navigate("/signup");
            }
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 border rounded-lg w-96 shadow-lg">
                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Login</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        className="p-3 border rounded-lg bg-gray-100 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        {...register("username")}
                    />
                    {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}

                    <input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className="p-3 border rounded-lg bg-gray-100 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        {...register("password")}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

                    {serverError && <p className="text-red-500 text-sm mt-1">{serverError}</p>}

                    <button
                        type="submit"
                        className="p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center mt-4 text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Login;