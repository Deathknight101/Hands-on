import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "sonner";

const AddVolunteer = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [formData, setFormData] = useState({
    title: "",
    thumbnail: "",
    category: "",
    location: "",
    description: "",
    deadline: new Date().getTime(),
    number_of_volunteers: 0,
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "number_of_volunteers") {
      value = parseInt(value);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      deadline: date.getTime(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      organizer_name: user?.displayName,
      organizer_email: user?.email,
    };
    axiosSecure
      .post("/add-volunteer-post", data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("New Volunteer Post Added!");
          setFormData({
            title: "",
            thumbnail: "",
            category: "",
            location: "",
            description: "",
            deadline: new Date().getTime(),
            number_of_volunteers: 0,
          });
        } else {
          toast.error("Internal Server Error");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-text sm:text-4xl lg:text-5xl">
              Add Volunteer Post
            </h2>
          </div>
          <div className="relative  mx-auto mt-8 md:mt-16">
            <div className="overflow-hidden rounded-md shadow-md dark:border">
              <div className="px-4 py-6 sm:px-8 sm:py-7">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-5">
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
                            value={formData.title}
                            onChange={handleChange}
                            required
                            placeholder="Enter your post title"
                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
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
                            value={formData.thumbnail}
                            onChange={handleChange}
                            required
                            placeholder="Enter your thumbnail URL"
                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
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
                            value={formData.category}
                            onChange={handleChange}
                            required
                            placeholder="Type of volunteering"
                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
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
                            value={formData.location}
                            onChange={handleChange}
                            required
                            placeholder="Location information"
                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
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
                            value={user?.displayName}
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
                            value={user?.email}
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
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            required
                            placeholder="Description about the volunteering activity..."
                            className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                          />
                        </div>
                      </div>
                      {/* DEADLINE/NUMBER OF VOLUNTEER */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* DEADLINE */}
                        <div className="w-full">
                          <label className="text-base font-medium text-text">
                            Deadline
                          </label>
                          <div className="mt-2.5 relative text-background focus-within:text-gray-600 w-full">
                            <ReactDatePicker
                              selected={formData.deadline}
                              onChange={handleDateChange}
                              required
                              className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
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
                              value={formData.number_of_volunteers}
                              onChange={handleChange}
                              required
                              placeholder="No. of volunteers needed"
                              className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-gray-50 dark:bg-gray-200 border border-gray-200 rounded-md focus:outline-none focus:border-primary caret-primary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="btn w-full bg-primary text-white border-primary rounded-md hover:bg-primary hover:border-primary hover:text-white"
                      >
                        Add Post
                      </button>
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

export default AddVolunteer;
