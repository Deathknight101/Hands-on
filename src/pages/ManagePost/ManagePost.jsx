import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { toast } from "sonner";
import { MdCancel } from "react-icons/md";

const ManagePost = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // volunteer request code
  const [requests, setRequests] = useState([]);
  const [requestsLoading, setRequestsLoading] = useState(true);
  const [triggerRefetchRequests, setTriggerRefetchRequest] = useState(false);

  useEffect(() => {
    setRequestsLoading(true);
    axiosSecure.get(`/volunteer-request/${user.email}`).then((res) => {
      setRequests(res.data);
      setRequestsLoading(false);
    });
  }, [axiosSecure, user.email, triggerRefetchRequests]);

  // handle volunteer request cancel
  const handleRequestCancel = (id) => {
    toast("Cancel Request?", {
      icon: <MdCancel className="text-red-500 text-2xl" />,
      action: {
        label: "Yes",
        onClick: () => {
          axiosSecure.delete(`/volunteer-request/${id}`).then((res) => {
            if (res?.data?.deletedCount > 0) {
              toast.success("Request has been cancelled.");
            }
            setTriggerRefetchRequest(!triggerRefetchRequests);
          });
        },
      },
      cancel: {
        label: "No",
        onClick: () => {},
      },
    });
  };
  return (
    <div className="grid grid-cols-2 gap-5 container mx-auto px-1 py-2">
      <div className="border-text border p-2 min-h-[60vh]">
        <h1 className="text-center text-text my-8 text-2xl">
          My Need Volunteer Posts
        </h1>
      </div>
      <div className="border-text border p-2 min-h-[60vh]">
        <h1 className="text-center text-text mt-8 mb-4 text-2xl">
          My Volunteer Requests
        </h1>
        {requestsLoading ? (
          <>
            <div className="flex py-20  justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          </>
        ) : (
          <>
            {requests.length > 0 ? (
              <>
                {" "}
                <div className="overflow-x-auto">
                  <table className="table table-zebra text-text">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Deadline</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {requests.map((item) => (
                        <tr key={item._id} className="text-xs">
                          <th>{item.post_title}</th>
                          <td>{item.post_category}</td>
                          <td>
                            {new Date(item.post_deadline).toLocaleDateString()}
                          </td>
                          <td className="flex justify-end">
                            <button
                              onClick={() => handleRequestCancel(item._id)}
                              className="btn-xs btn bg-red-500 text-white border-none hover:bg-red-600 hover:text-white"
                            >
                              Cancel
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <>
                <div className="flex py-20 justify-center items-center">
                  <h1 className="text-red-500 font-bold">No Requests</h1>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ManagePost;
