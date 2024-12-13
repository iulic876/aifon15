const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img
          src="/public/assets/images/apple.svg"
          alt="logo"
          width={18}
          height={14}
        />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {["iPhone", "iPad", "Mac", "Watch", "TV", "Music", "Support"].map(
            (nav) => (
              <div
                key={nav}
                className="px-5 text-sm coursor-pointer text-gray hover:text-white transition-all"
              >
                {nav}
              </div>
            )
          )}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img
            src="/public/assets/images/search.svg"
            alt="search"
            width={18}
            height={14}
          />

          <img
            src="/public/assets/images/bag.svg"
            alt="bag"
            width={18}
            height={14}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
