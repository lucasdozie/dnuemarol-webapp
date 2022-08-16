function Header() {
  return (
    <>
      <div className="flex justify-between bg-black px-5 py-6 text-white">
        <div className="flex justify-evenly">
          <img src="" alt="logo" />
          <div className="flex justify-evenly">
            <input type="search" placeholder="Search Jobs" size="30" />
            <div className="bg-blue-500">
              <img src="" alt="search" />
            </div>
          </div>
        </div>
        <div>
          <a href="#" className="p-3">JOBS</a>
          <a href="#" className="p-3">COMPANY</a>
          <a href="#" className="p-3">ADVICE</a>
          <a href="#" className="p-3">COACHING</a>
          <a href="#" className="p-3 border-solid border-2 rounded">EMPLOYERS</a>
          <a href="#" className="p-3">SIGN IN</a>
        </div>
      </div>
    </>
  );
}

export default Header;
