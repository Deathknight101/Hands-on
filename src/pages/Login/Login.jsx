import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "./../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInUser, signInWithGoogle } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    signInUser(data.email, data.password)
      .then(() => {
        toast.success("Signed In Successfully! Redirecting..");
        setTimeout(() => {
          if (location?.state?.from) {
            navigate(location?.state?.from);
          } else {
            navigate("/");
          }
        }, 1000);
      })
      .catch((err) => toast.error(err.message));

    console.log(data);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("Signed In Successfully! Redirecting..");
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <Helmet>
        <title>HandsON | Sign In</title>
      </Helmet>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
              Sign In
            </h2>
          </div>
          <div className="relative max-w-md mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden rounded-md shadow-md dark:border">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={handleLogin}>
                  <div className="space-y-5">
                    <div>
                      <label className="text-base font-medium text-text">
                        Email address
                      </label>
                      <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <AiOutlineMail className="text-xl text-black" />
                        </div>

                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-text">
                        Password
                      </label>
                      <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <RiLockPasswordLine className="text-xl text-black" />
                        </div>

                        <input
                          type="password"
                          name="password"
                          required
                          placeholder="Enter your password"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="btn w-full bg-primary text-white border-primary rounded-md hover:bg-primary hover:border-primary hover:text-white"
                      >
                        Sign In
                      </button>
                      <hr className="my-2" />
                      <button
                        type="button"
                        onClick={() => handleGoogleLogin()}
                        className="btn w-full bg-primary text-white border-primary rounded-md hover:bg-primary hover:border-primary hover:text-white"
                      >
                        Sign In With Google
                      </button>
                    </div>
                    <div className="text-center">
                      <p className="text-base text-text">
                        Don`t have an account?{" "}
                        <Link
                          to={"/register"}
                          className="font-bold hover:underline"
                        >
                          Sign up here
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
