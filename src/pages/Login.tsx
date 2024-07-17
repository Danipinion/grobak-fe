import { Button } from "@/components/ui/button";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const navigation = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      navigation("/menu");
      setIsLoading(false);
    }, 5000);
  };
  return (
    <div className="flex flex-col  px-10 h-screen">
      <div className="self-start my-6">
        <h1 className="text-3xl text-primary font-bold">Login</h1>
      </div>
      <div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold text-xl text-primary">
              Username
            </label>
            <input
              type="text"
              className="border-2 border-primary rounded-lg text-sm px-3 py-2 w-full"
              placeholder="Masukkan Username"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold text-xl text-primary">
              Password
            </label>
            <input
              type="password"
              className="border-2 border-primary rounded-lg text-sm px-3 py-2 w-full"
              placeholder="Masukkan Password"
            />
          </div>
          <div>
            <Button className="font-bold w-60">
              {isLoading ? "Loading..." : "Login"}
            </Button>
          </div>
          <div>
            <p className="text-sm text-primary">
              Belum punya akun?{" "}
              <Link to="/register" className="font-bold underline">
                Daftar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
