
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="1" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="10" text="Websites" />
      </div>
      <p className="text-center">
        With Internship experience building dynamic and user-friendly web
        applications.
      </p>
      
    </div>
  );
};

export default ExperienceTopLeft;