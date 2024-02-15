import useGetTeam from "../../API/teamApi/useGetTeam";
import TeamCard from "./TeamCard";

const Teams = () => {
  const [teams, loading] = useGetTeam();
  //  console.log(teams);
  return (
    <div className="py-20 font-andika">
      <h5 className="text-2xl text-green-600 font-semibold text-center pb-5">
        Our Team
      </h5>
      <h3 className="text-5xl font-bold text-[#000000] text-center">
        Team of Eco-Smart Bin (Team Unbeaten)
      </h3>

      <div className="py-20 mx-12">
        <div className="md:flex justify-between items-start mb-20">
          <h5 className="text-2xl text-white mb-4 font-semibold w-72 bg-brand-color px-4 py-2 rounded-r-full ">
            Meet Our Experts
          </h5>
          <h3 className="md:w-[800px]">
            Our dedicated team of experts is passionate about waste management
            and sustainability. Each member brings a unique set of skills and
            experience to contribute to our mission of creating a cleaner
            environment.
          </h3>
        </div>

        {loading ? (
          <div className="text-center">
            <span className="loading bg-[#3A9E1E] loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 justify-center items-center gap-8 pt-8">
            {teams?.map((team) => (
              <TeamCard key={team?._id} team={team}></TeamCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;
