import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col gap-2 justify-center items-center p-2">
      <h1 className="text-4xl font-bold">404</h1>
      <h1>PAGE NOT FOUND</h1>
      <button
        onClick={() => navigate("/")}
        className="btn bg-text text-background hover:bg-text hover:text-background border-none"
      >
        GO TO HOME
      </button>
    </div>
  );
};

export default Error;
