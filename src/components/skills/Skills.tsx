import Skill from "@/components/skills/Skill";
import Divider from "../divider/Divider";

const skills = [
  ".NET",
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL",
  "MVC",
  "React",
  "Angular",
  "Blazor",
  "HTML",
  "CSS",
  "DevOps",
  "GitHub",
  "Responsive Web Design",
  "Software Design",
  "Technical Writing",
];

const Skills = () => {
  const skillElements = skills.map((skill) => {
    return <Skill key={skill} name={skill} />;
  });

  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Divider />
        <div className="mx-auto max-w-prose text-center py-16 sm:py-24 lg:py-32">
          <h1 className="text-4xl font-bold text-sky-500 sm:text-5xl">
            What I can do
          </h1>

          <p className="mt-4 text-base text-pretty text-slate-700 sm:text-lg/relaxed">
            I am always learning and expanding my proficiencies. Here are some
            of my skills.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 sm:mt-6">
            {skillElements}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
