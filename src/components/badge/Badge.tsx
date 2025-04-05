export type BadgeProps = {
  name: string;
};

const Badge = ({ name }: BadgeProps) => {
  return (
    <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-sky-600">
      {name}
    </span>
  );
};

export default Badge;
