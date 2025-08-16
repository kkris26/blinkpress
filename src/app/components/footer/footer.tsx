import Logo from "../logo/logo";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className="border-t pt-12 px-3 sm:px-5">
      <div className="pb-8 max-w-7xl mx-auto flex justify-center gap-3 flex-col items-center">
        <Logo />
        <p className="text-neutral-300 text-sm font-light max-w-150 text-center">
          Get the latest breaking news, in-depth analysis, and trending stories
          from around the world – all in one place, fast and reliable.
        </p>
      </div>
      <div className="border-t p-2">
        <p className="text-center text-sm font-light">
          © {currentYear} Blink Press. All rights reserved.
        </p>
      </div>
    </div>
  );
}
