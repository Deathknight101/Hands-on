import Banner from "./Banner/Banner";
import FAQ from "./FAQ/FAQ";
import Stories from "./Stories/Stories";
import VolunteerNeedsSection from "./VolunteerNeedsSection/VolunteerNeedsSection";

const Home = () => {
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="container mx-auto px-2 my-10">
        <div className="my-10">
          <VolunteerNeedsSection></VolunteerNeedsSection>
        </div>
      </div>
      <div className="my-10">
        <Stories></Stories>
      </div>
      <div className="container mx-auto px-2 my-10">
        <div className="my-10">
          <FAQ></FAQ>
        </div>
      </div>
    </div>
  );
};

export default Home;
