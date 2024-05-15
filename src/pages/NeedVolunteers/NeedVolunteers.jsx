import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const NeedVolunteers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let url = "/volunteer-posts";
        if (searchTerm) {
          url += `?title=${searchTerm}`;
        }
        const response = await axiosPublic.get(url);
        setData(response.data);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [axiosPublic, searchTerm]);

  return (
    <div className="container mx-auto px-4 my-5">
      <div className="my-5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search based on title..."
          className="input input-bordered w-full"
        />
      </div>
      {loading ? (
        <div className="py-40 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {data.map((item) => (
            <div
              key={item._id}
              className="bg-background border-text border p-2 rounded-xl"
            >
              <div className="relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="aspect-video object-cover rounded-lg"
                />
                <span className="absolute top-1.5 right-1.5 badge border-none badge-sm font-bold bg-primary text-white">
                  {item.category}
                </span>
              </div>
              <div className="px-1 mt-2">
                <h1 className="font-medium text-base text-text">
                  {item.title}
                </h1>
                <hr />
                <div className="flex justify-between items-center gap-2 mt-1 text-text">
                  <span className="text-sm">
                    Deadline: {new Date(item.deadline).toLocaleDateString()}
                  </span>
                  <button
                    className="btn btn-sm bg-primary hover:bg-primary border-primary hover:border-primary text-primary text-white rounded-none"
                    onClick={() =>
                      navigate(`/need-volunteer-post/details/${item._id}`)
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-40 flex justify-center items-center">
          <h1>No Upcoming Volunteer Needs!</h1>
        </div>
      )}
    </div>
  );
};

export default NeedVolunteers;
