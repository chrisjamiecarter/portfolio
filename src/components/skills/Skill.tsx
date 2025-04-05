export type SkillProps = {
  name: string;
};

const Skill = ({ name }: SkillProps) => {
  return (
    <div className="inline-block text-xs md:text:sm rounded-full border border-sky-600 bg-sky-600 px-5 py-3 font-medium text-white shadow-sm transition-colors duration-500 hover:bg-gray-50 hover:text-sky-400">
      {name}
    </div>
  );
};

export default Skill;
