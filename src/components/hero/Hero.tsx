import { ReactTyped } from "react-typed";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import CV from "@/assets/CV-chris-carter.pdf";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Github from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";

const Hero = () => {
  return (
    <section>
      <Jumbotron>
        <div className="text-white text-center grid h-screen place-content-center">
          <h1 className="mb-5 text-4xl font-bold sm:text-5xl">
            Hey, <span className="inline-block">I'm Chris Carter</span>
          </h1>
          <ReactTyped
            strings={[
              "Senior Software Engineer",
              "Back End Professional",
              "Front End Dabbler",
              "Full Stack Explorer",
            ]}
            typeSpeed={60}
            backDelay={1100}
            backSpeed={30}
            loop
          />
          <div className="flex gap-5 justify-center items-center p-10">
            <a
              href="https://github.com/chrisjamiecarter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Link"
              className="text-white transition-all duration-500 hover:text-sky-400">
              <Github className="fill-current w-15 h-auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/chris-carter-1495801aa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Link"
              className="text-white transition-all duration-500 hover:text-sky-400">
              <LinkedIn className="fill-current w-15 h-auto" />
            </a>
          </div>
          <div className="mt-4 flex flex-col md:flex-row items-center justify-center gap-4 sm:mt-6">
            <a
              className="inline-block w-50 rounded border border-gray-200 px-5 py-3 font-medium text-gray-200 shadow-sm transition-colors duration-500 hover:bg-gray-50 hover:text-sky-400"
              href="#about">
              About Me
            </a>

            <a
              className="inline-flex gap-1 items-center justify-center w-50 rounded border border-gray-200 px-5 py-3 font-medium text-gray-200 shadow-sm transition-colors duration-500 hover:bg-gray-50 hover:text-sky-400"
              href={CV}
              target="_blank">
              <ArrowDownTrayIcon className="size-6" />
              Download CV
            </a>
          </div>
        </div>
      </Jumbotron>
    </section>
  );
};

export default Hero;
