import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdVolunteerActivism } from "react-icons/md";
import { MdEmojiPeople } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  return (
    <div className=" bg-primary">
      <div className="container mx-auto px-2">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="min-h-[600px] flex flex-col items-center justify-center gap-4 px-3 text-center">
              <h1 className="text-5xl font-bold text-white text-center">
                Make a Difference Today
              </h1>
              <MdVolunteerActivism className="text-[170px] text-red-400"></MdVolunteerActivism>
              <h1 className="text-lg text-white">
                Find Your Perfect Volunteer Opportunity!
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-[600px] flex flex-col items-center justify-center gap-4 px-3 text-center">
              <h1 className="text-5xl font-bold text-white text-center">
                Empower Change
              </h1>
              <FaPeopleCarry className="text-[170px] text-green-400"></FaPeopleCarry>
              <h1 className="text-lg text-white">
                Explore Volunteer Opportunities That Align With Your Passion and
                Skills!
              </h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="min-h-[600px] flex flex-col items-center justify-center gap-4 px-3 text-center">
              <h1 className="text-5xl font-bold text-white text-center">
                Join Our Community
              </h1>
              <MdEmojiPeople className="text-[170px] text-yellow-400"></MdEmojiPeople>
              <h1 className="text-lg text-white">
                Discover Meaningful Ways to Volunteer and Give Back!
              </h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
