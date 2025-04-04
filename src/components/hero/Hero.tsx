import Jumbotron from "@/components/jumbotron/Jumbotron";
import Github from "@/components/icons/GitHub";
import LinkedIn from "@/components/icons/LinkedIn";

const Hero = () => {
  return (
    <section>
      <Jumbotron>
        <div className="text-white text-center grid h-screen place-content-center">
          <h1 className="text-4xl font-bold sm:text-5xl">Chris Carter</h1>
          <p>Software Engineer</p>
          <div className="flex gap-5 justify-center items-center p-10">
            <a
              href="https://github.com/chrisjamiecarter"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github Link"
              className="text-white transition-all duration-800 hover:text-black">
              <Github className="fill-current w-15 h-auto" />
            </a>
            <a
              href="https://www.linkedin.com/in/chris-carter-1495801aa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Link"
              className="text-white transition-all duration-800 hover:text-black">
              <LinkedIn className="fill-current w-15 h-auto" />
            </a>
          </div>
          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-sky-600 bg-sky-600 px-5 py-3 font-medium text-white shadow-sm transition-colors duration-800 hover:bg-sky-700"
              href="#about">
              About Me
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-200 shadow-sm transition-colors duration-800 hover:bg-gray-50 hover:text-gray-900"
              href="#">
              CV
            </a>
          </div>
        </div>
      </Jumbotron>
    </section>
  );
};

export default Hero;
