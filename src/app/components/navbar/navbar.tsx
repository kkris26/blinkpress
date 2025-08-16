import SearchForm from "../form/search-form";
import Logo from "../logo/logo";
import MenuSideBar from "../sidebar/menu-side-bar";
import MenuNav from "../menu/navigation-menu";
export default function Navbar() {
  return (
    <nav className=" w-full bg-neutral-950/80 fixed top-0 left-0 z-2 backdrop-blur-sm items-center flex justify-center py-2 border-b shadow">
      <div className="max-w-7xl w-full flex justify-between items-center px-3 sm:px-5">
        <div className="w-60 flex gap-1 items-center">
          <MenuSideBar />

          <Logo />
        </div>
        <MenuNav className="sm:block hidden" />
        <div className="w-60">
          <SearchForm />
        </div>
      </div>
    </nav>
  );
}
