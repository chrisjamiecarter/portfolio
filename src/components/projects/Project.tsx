import Github from "../icons/GitHub";

export type ProjectProps = {
  name: string;
  description: string;
  href: string;
  imageAlt: string;
  imageSrc: string;
};

const Project = ({
  name,
  description,
  href,
  imageAlt,
  imageSrc,
}: ProjectProps) => {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs">
      <img
        alt={imageAlt}
        src={imageSrc}
        className="h-70 w-full object-cover object-top"
      />
      <div className="p-4 sm:p-6">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className="flex gap-2 items-center">
            <Github />
            <h3 className="text-lg font-medium text-gray-900">{name}</h3>
          </div>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>
      </div>
    </article>

    // <div className="group relative">
    //   <img
    //     alt={imageAlt}
    //     src={imageSrc}
    //     className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
    //   />
    //   <h3 className="mt-6 text-sm text-gray-500">
    //     <a href={href} target="_blank" rel="noopener noreferrer">
    //       <span className="absolute inset-0" />
    //       {name}
    //     </a>
    //   </h3>
    //   <p className="text-base font-semibold text-gray-900">{description}</p>
    // </div>
  );
};

export default Project;
