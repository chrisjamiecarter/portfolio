import ProfilePicture from "@/assets/profile-picture.png";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-screen-xl flex justify-around px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="hidden items-center lg:flex">
          <img
            alt=""
            src={ProfilePicture}
            className="object-contain rounded-full shadow-[1rem_1rem_#00a6f4] transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:shadow-[2rem_2rem_#00a6f4]"
          />
        </div>
        <div className="max-w-prose text-center">
          <h1 className="text-4xl font-bold text-sky-500 sm:text-5xl">
            Who I am
          </h1>
          <p className="mt-4 text-base text-pretty text-slate-700 sm:text-lg/relaxed">
            I'm a <strong>Senior Software Engineer</strong> who loves creating
            and learning new things. Check out some of my recent work in the{" "}
            <strong>Projects</strong> section.
          </p>
          <p className="mt-4 text-base text-pretty text-slate-700 sm:text-lg/relaxed">
            Feel free to connect with me on <strong>LinkedIn</strong> or{" "}
            <strong>GitHub</strong>. I enjoy both learning from and contributing
            to the Software Development community.
          </p>
          <p className="mt-4 text-base text-pretty text-slate-700 sm:text-lg/relaxed">
            I'm currently on the lookout for exciting job opportunities where I
            can make an impact while continuing to learn and grow. If you think
            we'd be a good match, get in touch!
          </p>
          <p className="mt-4 text-base text-pretty text-slate-700 sm:text-lg/relaxed">
            When I'm not glued to my keyboard, you'll find me hitting the
            pavement for a run, cheering for my favorite football team, or
            simply enjoying quality time with my family.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
