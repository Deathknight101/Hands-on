import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const VolunteerNeedsSection = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    setLoading(true);
    axiosPublic.get("/volunteer-posts/upcoming").then((res) => {
      setData(res.data);
      setLoading(false);
    });
    setLoading(false);
  }, [loading, axiosPublic]);

  return (
    <div>
      {/* TITLE */}
      <h1 className="text-center font-bold text-gray-500">UPCOMING</h1>
      <h1 className="text-text text-center text-4xl font-semibold mb-4">
        Volunteer Needs Now
      </h1>
      {/* CARDS */}
      {loading ? (
        <>
          <div className="py-40">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          {data.length > 0 ? (
            <>
              <div className="grid grid-cols-3 gap-5">
                {data.map((item) => (
                  <div
                    key={item._id}
                    className="bg-background border-text border p-2 rounded-xl"
                  >
                    <div className="relative">
                      <img
                        src={item.thumbnail}
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
                          Deadline:{" "}
                          {new Date(item.deadline).toLocaleDateString()}
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
            </>
          ) : (
            <>
              <div className="py-40 flex justify-center items-center">
                <h1>No Upcoming Volunteer Needs!</h1>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default VolunteerNeedsSection;
