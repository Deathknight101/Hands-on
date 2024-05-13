const Stories = () => {
  return (
    <div className="bg-primary py-10">
      <div className="container mx-auto px-2">
        {/* TITLE */}
        <h1 className="text-center font-bold text-gray-200">FEATURED</h1>
        <h1 className="text-white text-center text-4xl font-semibold">
          Volunteer Stories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-5">
          {/* FIRST STORY CARD */}
          <div className="bg-primary p-2 flex flex-col h-full ">
            <img
              src="https://i.ibb.co/1npsF7M/pexels-divinetechygirl-1181534.jpg"
              className="aspect-video object-cover rounded-xl"
              alt="Sarah's Story"
            />
            <h1 className="truncate-1 text-lg font-medium mt-2 text-white">
              Empowering Youth Through Mentorship
            </h1>
            <p className="flex-1 text-white">
              {`Sarah, a dedicated volunteer mentor, has been empowering at-risk
              youth in her community through mentorship programs. By sharing her
              time and guidance, she's helped these young individuals build
              confidence, develop valuable life skills, and pursue their dreams.`}
            </p>
          </div>

          {/* SECOND STORY CARD */}
          <div className="bg-primary p-2 flex flex-col h-full ">
            <img
              src="https://i.ibb.co/CPwHtj7/pexels-ono-kosuki-5974292.jpg"
              className="aspect-video object-cover rounded-xl"
              alt="James' Journey"
            />
            <h1 className="truncate-1 text-lg font-medium mt-2 text-white">
              Building Homes, Building Hope
            </h1>
            <p className="flex-1 text-white">
              {`James has been making a difference by volunteering with Habitat
              for Humanity, where he's helped build safe and affordable homes
              for families in need. His hard work and dedication have not only
              provided shelter but also restored hope and stability to those
              facing housing challenges.`}
            </p>
          </div>

          {/* THIRD STORY CARD */}
          <div className="bg-primary p-2 flex flex-col h-full ">
            <img
              src="https://i.ibb.co/xC6xvyg/pexels-karolina-grabowska-5207087.jpg"
              className="aspect-video object-cover rounded-xl"
              alt="Maria's Mission"
            />
            <h1 className="truncate-1 text-lg font-medium mt-2 text-white">
              Bringing Joy to Seniors
            </h1>
            <p className="flex-1 text-white">
              {`Maria has been spreading love and joy to seniors in her community
              by volunteering at a local nursing home. Whether it's through
              companionship, organizing activities, or simply lending a
              listening ear, Maria's kindness and compassion have made a
              significant impact on the lives of the elderly residents she
              serves.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
