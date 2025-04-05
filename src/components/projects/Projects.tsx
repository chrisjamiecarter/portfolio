import BudgetImage from "@/assets/budget.png";
import FriendsManagerImage from "@/assets/friends-manager.png";
import MemoryGameImage from "@/assets/memory-game.png";
import ProductManagementSystemImage from "@/assets/product-management-system.png";
import QuizGameImage from "@/assets/quiz-game.png";
import SleepTrackerImage from "@/assets/sleep-tracker.png";
import Project from "./Project";
import Divider from "../divider/Divider";

const projects = [
  {
    name: "Quiz Game",
    description:
      "A .NET and Angular project designed to demonstrate a complete fullstack application with complex data relationships.",
    href: "https://github.com/chrisjamiecarter/quiz-game",
    imageSrc: QuizGameImage,
    imageAlt: "Quiz Game",
    badges: [
      "C#",
      "TypeScript",
      "HTML",
      "CSS",
      "TSQL",
      "Angular",
      "Angular Material",
      "Entity Framework Core",
      "SQL Server",
    ],
  },
  {
    name: "Memory Game",
    description:
      "A .NET project designed to demonstrate building a Blazor application that manipulates the state of a complex UI.",
    href: "https://github.com/chrisjamiecarter/memory-game",
    imageSrc: MemoryGameImage,
    imageAlt: "Memory Game",
    badges: [
      "HTML",
      "C#",
      "CSS",
      "Blazor",
      "Bootstrap",
      "Entity Framework Core",
      "SQL Server",
    ],
  },

  {
    name: "Friends Manager",
    description:
      "A .NET and React project designed to demonstrate using Redux for handling the state management within the frontend application.",
    href: "https://github.com/chrisjamiecarter/friends-manager",
    imageSrc: FriendsManagerImage,
    imageAlt: "Friends Manager",
    badges: [
      "JavaScript",
      "C#",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Tailwind",
      "Entity Framework Core",
      "SQL Server",
    ],
  },
  {
    name: "Sleep Tracker",
    description:
      "A .NET and Angular project designed to demonstrate using Angular Material to build the UI components.",
    href: "https://github.com/chrisjamiecarter/sleep-tracker",
    imageSrc: SleepTrackerImage,
    imageAlt: "Sleep Tracker",
    badges: [
      "C#",
      "TypeScript",
      "HTML",
      "SCSS",
      "Angular",
      "Angular Material",
      "Entity Framework Core",
      "SQL Server",
    ],
  },
  {
    name: "Product Management System",
    description:
      "A .NET project designed to demonstrate role based authentication and authorisation with ASP.NET Core Identity.",
    href: "https://github.com/chrisjamiecarter/product-management-system",
    imageSrc: ProductManagementSystemImage,
    imageAlt: "Product Management System",
    badges: [
      "C#",
      "HTML",
      "CSS",
      "Blazor",
      "Bootstrap",
      "ASP.NET Core Identity",
      "Entity Framework Core",
      "SQL Server",
    ],
  },
  {
    name: "Budget",
    description:
      "A .NET project designed to demonstrate role based authentication and authorisation with ASP.NET Core Identity.",
    href: "https://github.com/chrisjamiecarter/budget",
    imageSrc: BudgetImage,
    imageAlt: "Budget",
    badges: [
      "C#",
      "HTML",
      "CSS",
      "JavaScript",
      "ASP.NET MVC",
      "Bootstrap",
      "ASP.NET Core Identity",
      "Entity Framework Core",
      "SQL Server",
    ],
  },
];

const Projects = () => {
  const projectElements = projects.map((project) => (
    <Project key={project.name} {...project} />
  ));

  return (
    <section id="projects" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <Divider />
        <div className="py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-sky-500 sm:text-5xl">
              What I have done
            </h1>

            <p className="mt-4 text-base text-pretty text-slate-700 sm:text-lg/relaxed">
              I love to build personal projects as well as contribute to
              community projects. Here are some of my personal projects.
            </p>
          </div>
          <div className="pt-4 sm:mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-6">
            {projectElements}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
