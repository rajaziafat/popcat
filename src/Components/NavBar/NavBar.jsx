const NavBar = () => {
  return (
    <nav className=" flex justify-center items-center">
      <div className="w-[97%]  max-w-[1480px] py-5 grid grid-flow-col justify-between items-center sm:items-start xsm:w-full xsm:px-1">
        <div className="flex gap-6 items-center flex-wrap ">
          <a href="https://shop.popcat.click/" rel="noopener" target="_blank">
            <img
              src="./shop.png"
              className="w-20 h-20 sm:h-16 sm:w-16 rounded-full"
              alt=""
            />
          </a>
          <a href="https://maxwellcat.world/" rel="noopener" target="_blank">
            <img
              src="./maxwell.png"
              className="w-20 h-20 sm:h-16 sm:w-16 rounded-full"
              alt=""
            />
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src="./Logo.svg"
            className="min-w-[200px]  max-w-[20%] mr-28 xl:mr-0 sm:mt-4 xsm:min-w-[150px]"
            alt=""
          />
        </div>

        <div className="">
          <a href="https://spinningrat.online/" rel="noopener" target="_blank">
            <img
              src="./sprint.png"
              className="w-20 h-20 sm:h-16 sm:w-16 rounded-full"
              alt=""
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
