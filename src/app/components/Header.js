import Image from "next/image";
const Header = () => {
  return (
    <header>
    <div className="logo_container">
      <Image src="/assets/imgs/logo.webp" width={200} height={200} alt="logo" />
    </div>
    <nav>
      <ul className="nav_links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
    <div className="menu_toggle" id="menu-toggle">
      ☰
    </div>
  </header>
  );
};

export default Header;
