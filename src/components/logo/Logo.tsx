import logo from "@/assets/logo.png";

export type LogoProps = {
  className: string;
};

const Logo = ({ className }: LogoProps) => {
  return <img alt="" src={logo} className={`rounded ${className}`} />;
};

export default Logo;
