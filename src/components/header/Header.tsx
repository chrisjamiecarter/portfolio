import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/components/logo/Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 text-slate-700 lg:px-8">
        <a href="#" className="flex gap-2 items-center font-semibold ">
          <span className="sr-only">Chris Carter</span>
          <Logo className="h-8 w-auto" />
        </a>
        <div className="flex flex-1 justify-end lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer">
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-x-12">
          <a href="#about" className="text-sm/6 font-semibold">
            About
          </a>
          <a href="#skills" className="text-sm/6 font-semibold">
            Skills
          </a>
          <a href="#projects" className="text-sm/6 font-semibold">
            Projects
          </a>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-slate-700/10">
          <div className="flex items-center justify-between sm:justify-end">
            <a
              href="#"
              className="flex gap-2 items-center font-semibold sm:hidden">
              <Logo className="h-8 w-auto" />
              <span className="font-semibold text-slate-700">Chris Carter</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-slate-700 cursor-pointer">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-2">
              <a
                href="#about"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-700 hover:bg-sky-100"
                onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a
                href="#skills"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-700 hover:bg-sky-100"
                onClick={() => setMobileMenuOpen(false)}>
                Skills
              </a>
              <a
                href="#projects"
                className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-700 hover:bg-sky-100"
                onClick={() => setMobileMenuOpen(false)}>
                Projects
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
