import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "sonner";
import { useState } from "react";
const VolunteerPostDetails = () => {
  let loaded_data = useLoaderData();
  const [data, SetData] = useState(loaded_data);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleVolunteer = (e) => {
    e.preventDefault();

    const form = e.target;

    const volunteer_data = {
      post_id: data._id,
      volunteer_name: form.volunteer_name.value,
      volunteer_email: form.volunteer_email.value,
      volunteer_suggestion: form.volunteer_suggestion.value,
      status: "requested",
    };

    axiosSecure
      .post("/add-volunteer-request", volunteer_data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Request Sent!");
          document.getElementById("my_modal_5").close();
          form.volunteer_suggestion.value = "";
          SetData({
            ...data,
            number_of_volunteers: data.number_of_volunteers - 1,
          });
        } else {
          toast.error("Internal Server Error");
          document.getElementById("my_modal_5").close();
          form.volunteer_suggestion.value = "";
        }
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        document.getElementById("my_modal_5").close();
        form.volunteer_suggestion.value = "";
      });
  };

  return (
    <div className="container mx-auto px-2 py-20">
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="flex-1">
          <img src={data.thumbnail} className="object-cover" />
        </div>
        <div className="flex-1 text-text flex flex-col">
          <h1 className="uppercase font-bold badge badge-sm -ml-1">
            {data.category}
          </h1>
          <h1 className="text-2xl mt-2">{data.title}</h1>
          <p className="mt-2">{data.description}</p>
          <hr className="my-1" />
          <div>
            <h1 className="font-semibold">Organizer Name</h1>
            <h1>{data.organizer_name}</h1>
          </div>
          <div className="mt-2">
            <h1 className="font-semibold">Organizer Email</h1>
            <h1>{data.organizer_email}</h1>
          </div>
          <hr className="my-1" />
          <div className="flex flex-col md:flex-row gap-5 mt-4">
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-xl text-primary" />{" "}
              <span>{data.location}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaCalendar className="text-xl text-primary" />{" "}
              <span>{new Date(data.deadline).toLocaleDateString()}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaPeopleGroup className="text-xl text-primary" />{" "}
              <span>{data.number_of_volunteers}</span>
            </p>
          </div>
          <div className="flex-1 flex items-end mt-4">
            <button
              className={`btn bg-primary text-white border-none rounded-none hover:bg-primary hover:text-white w-full disabled:bg-red-900 disabled:text-red-500`}
              onClick={() => document.getElementById("my_modal_5").showModal()}
              disabled={data.number_of_volunteers === 0 ? true : false}
            >
              {data.number_of_volunteers === 0
                ? "Fully Booked"
                : "Be a Volunteer"}
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-background">
          <div className="space-y-5">
            <h1 className="text-text text-center font-bold text-2xl">
              Be A Volunteer
            </h1>
            {/* TITLE/THUMBNAIL/CATEGORY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* TITLE */}
              <div>
                <label className="text-base font-medium text-text">
                  Post Title
                </label>
                <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                  <input
                    type="text"
                    name="title"
                    readOnly
                    value={data.title}
                    required
                    placeholder="Enter your post title"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>
              </div>
              {/* THUMBNAIL */}
              <div>
                <label className="text-base font-medium text-text">
                  Post Thumbnail
                </label>
                <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                  <input
                    type="text"
                    name="thumbnail"
                    value={data.thumbnail}
                    required
                    readOnly
                    placeholder="Enter your thumbnail URL"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>
              </div>
              {/* CATEGORY */}
              <div>
                <label className="text-base font-medium text-text">
                  Category
                </label>
                <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                  <input
                    type="text"
                    name="category"
                    value={data.category}
                    required
                    readOnly
                    placeholder="Type of volunteering"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>
              </div>
            </div>
            {/* LOCATION/ORGANIZER NAME/ORGANIZER EMAIL */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* LOCATION */}
              <div>
                <label className="text-base font-medium text-text">
                  Location
                </label>
                <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                  <input
                    type="text"
                    name="location"
                    value={data.location}
                    required
                    readOnly
                    placeholder="Location information"
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>
              </div>
              {/* ORGANIZER NAME */}
              <div>
                <label className="text-base font-medium text-text">
                  Organizer Name
                </label>
                <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                  <input
                    type="text"
                    name="organizer_name"
                    value={data.organizer_name}
                    readOnly
                    disabled
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>
              </div>
              {/* ORGANIZER EMAIL */}
              <div>
                <label className="text-base font-medium text-text">
                  Organizer Email
                </label>
                <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                  <input
                    type="text"
                    name="organizer_email"
                    value={data.organizer_email}
                    readOnly
                    disabled
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>
              </div>
            </div>
            {/* DESCRIPTION/DEADLINE/NUMBER OF VOLUNTEERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* DESCRIPTION */}
              <div>
                <label className="text-base font-medium text-text">
                  Description
                </label>
                <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                  <textarea
                    type="text"
                    name="description"
                    value={data.description}
                    rows={6}
                    required
                    readOnly
                    placeholder="Description about the volunteering activity..."
                    className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                  />
                </div>
              </div>
              {/* DEADLINE/NUMBER OF VOLUNTEER */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
                {/* DEADLINE */}
                <div className="w-full">
                  <label className="text-base font-medium text-text">
                    Deadline
                  </label>
                  <div className="mt-2.5 relative text-background focus-within:text-gray-600 w-full">
                    <ReactDatePicker
                      selected={data.deadline}
                      required
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                    />
                  </div>
                </div>
                {/* NUMBER */}
                <div>
                  <label className="text-base font-medium text-text">
                    Number of Volunteers
                  </label>
                  <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                    <input
                      type="number"
                      name="number_of_volunteers"
                      value={data.number_of_volunteers}
                      required
                      readOnly
                      placeholder="No. of volunteers needed"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            className="grid grid-cols-1 md:grid-cols-1 gap-5 mt-5"
            onSubmit={handleVolunteer}
          >
            {/* VOLUNTEER NAME */}
            <div>
              <label className="text-base font-medium text-text">
                Volunteer Name
              </label>
              <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                <input
                  type="text"
                  name="volunteer_name"
                  value={user?.displayName}
                  required
                  readOnly
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                />
              </div>
            </div>
            {/* VOLUNTEER EMAIL */}
            <div>
              <label className="text-base font-medium text-text">
                Volunteer Email
              </label>
              <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                <input
                  type="text"
                  name="volunteer_email"
                  value={user?.email}
                  readOnly
                  required
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-400 border border-gray-400 rounded-md focus:outline-none focus:border-primary caret-primary"
                />
              </div>
            </div>
            {/* VOLUNTEER SUGGESTION */}
            <div className="">
              <label className="text-base font-medium text-text">
                Suggestion
              </label>
              <div className="mt-2.5 relative text-background focus-within:text-gray-600">
                <input
                  type="text"
                  name="volunteer_suggestion"
                  required
                  className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                className="btn w-full bg-primary text-white border-none rounded-none hover:bg-primary hover:text-white"
                type="submit"
              >
                Request
              </button>
              <button
                className="btn w-full bg-red-500 text-white border-none rounded-none hover:bg-red-600 hover:text-white"
                onClick={() => document.getElementById("my_modal_5").close()}
                type="button"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default VolunteerPostDetails;
