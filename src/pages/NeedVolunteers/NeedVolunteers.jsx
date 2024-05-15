import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { GrTable } from "react-icons/gr";
const NeedVolunteers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [layout, setLayout] = useState("grid");
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
      <div className="my-5 flex gap-5">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search based on title..."
          className="input input-bordered w-full"
        />
        <button
          className={`text-2xl duration-300 ${
            layout === "grid" ? "text-primary dark:text-white" : "text-gray-400"
          }`}
          onClick={() => setLayout("grid")}
        >
          <BsFillGrid3X3GapFill></BsFillGrid3X3GapFill>
        </button>
        <button
          className={`text-2xl duration-300 ${
            layout === "table"
              ? "text-primary dark:text-white"
              : "text-gray-300 dark:text-gray-500"
          }`}
          onClick={() => setLayout("table")}
        >
          <GrTable></GrTable>
        </button>
      </div>
      {loading ? (
        <div className="py-40 flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : data.length > 0 ? (
        <>
          {layout === "grid" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.map((item) => (
                  <div
                    key={item._id}
                    className="bg-background border-text border p-2 rounded-xl"
                  >
                    <div className="px-1 mt-2">
                      <h1 className="font-medium text-base text-text">
                        {item.title}
                      </h1>
                      <hr />
                      <div className="flex justify-between gap-2 mt-1 text-text">
                        <div>
                          <h1 className="text-sm underline">{item.category}</h1>
                          <h1 className="text-sm">
                            Deadline:{" "}
                            {new Date(item.deadline).toLocaleDateString()}
                          </h1>
                        </div>
                        <div className="flex items-end">
                          <button
                            className="btn btn-sm bg-primary hover:bg-primary border-primary hover:border-primary text-primary text-white rounded-none"
                            onClick={() =>
                              navigate(
                                `/need-volunteer-post/details/${item._id}`
                              )
                            }
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Category</th>
                      <th>Deadline</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item._id}>
                        <th>{item.title}</th>
                        <td>{item.category}</td>
                        <td>{new Date(item.deadline).toLocaleDateString()}</td>
                        <td></td>
                        <td className="flex justify-end">
                          <button
                            className="btn btn-xs bg-primary hover:bg-primary border-primary hover:border-primary text-primary text-white rounded-none"
                            onClick={() =>
                              navigate(
                                `/need-volunteer-post/details/${item._id}`
                              )
                            }
                          >
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="py-40 flex justify-center items-center">
          <h1>No Volunteer Need Posts Found!</h1>
        </div>
      )}
    </div>
  );
};

export default NeedVolunteers;
