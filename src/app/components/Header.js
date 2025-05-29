import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <header>
    <div className="logo_container">
      <Image src="/assets/imgs/logo.webp" width={200} height={200} alt="logo" />
    </div>
    <nav>
      <ul className="nav_links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#">Categories</Link></li>
        <li><Link href="#">About</Link></li>
      </ul>
    </nav>
    <div className="menu_toggle" id="menu-toggle">
      ☰
    </div>
  </header>
  );
};

export default Header;
