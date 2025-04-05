import Logo from "@/components/logo/Logo";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-2 items-center justify-center text-slate-700 sm:justify-start">
            <Logo className="h-8 w-auto" />
            <span className="font-semibold">Chris Carter</span>
          </div>

          <p className="mt-4 text-center text-sm text-slate-500 lg:mt-0 lg:text-right">
            Copyright &copy; {year}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
