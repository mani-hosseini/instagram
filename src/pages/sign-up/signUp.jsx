import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Signup() {
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
            const response = await axios.post("api/user/signup", data);
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("user", JSON.stringify(response.data.user));

            navigate("/dashboard");
        } catch (error) {
            setServerError(error.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white p-8 border rounded-lg w-96 shadow-lg">
                <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">Instagram</h2>
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
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        className="p-3 border rounded-lg bg-gray-100 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                    <input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        className="p-3 border rounded-lg bg-gray-100 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        {...register("password")}
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

                    <button
                        type="submit"
                        className="p-3 rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="text-center mt-4 text-sm text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-500 hover:underline">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Signup;
