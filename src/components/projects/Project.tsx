import Badge from "../badge/Badge";
import Github from "../icons/GitHub";

export type ProjectProps = {
  name: string;
  description: string;
  href: string;
  imageAlt: string;
  imageSrc: string;
  badges: string[];
};

const Project = ({
  name,
  description,
  href,
  imageAlt,
  imageSrc,
  badges,
}: ProjectProps) => {
  const badgeElements = badges.map((badge) => {
    return <Badge key={badge} name={badge} />;
  });

  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <img
        alt={imageAlt}
        src={imageSrc}
        className="h-70 w-full object-cover object-top"
      />
      <div className="p-4 sm:p-6">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <div className="flex gap-2 items-center">
            <Github />
            <h3 className="text-lg font-medium text-slate-700">{name}</h3>
          </div>
        </a>
        <p className="mt-2 line-clamp-3 text-sm/relaxed text-slate-500">
          {description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 px-4 pb-4 sm:px-6 sm:pb-6">
        {badgeElements}
      </div>
    </article>
  );
};

export default Project;
