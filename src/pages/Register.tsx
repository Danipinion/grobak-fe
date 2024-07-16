import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col  px-10 h-screen">
      <div className="self-start my-6">
        <h1 className="text-3xl text-primary font-bold">Daftar</h1>
      </div>
      <div>
        <form
          onSubmit={handleRegister}
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
              Email
            </label>
            <input
              type="email"
              className="border-2 border-primary rounded-lg text-sm px-3 py-2 w-full"
              placeholder="Masukkan Email"
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
          <div className="flex flex-col w-full">
            <label htmlFor="" className="font-semibold text-xl text-primary">
              Konfirmasi Password
            </label>
            <input
              type="password"
              className="border-2 border-primary rounded-lg text-sm px-3 py-2 w-full"
              placeholder="Masukkan Konfirmasi Password"
            />
          </div>
          <div>
            <Button className="font-bold w-60">Daftar</Button>
          </div>
          <div>
            <p className="text-sm text-primary">
              Sudah punya akun?{" "}
              <Link to="/login" className="font-bold underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
