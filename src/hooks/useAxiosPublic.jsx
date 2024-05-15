import axios from "axios";
export const axiosPublic = axios.create({
  baseURL: "https://b9-a11-backend.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
