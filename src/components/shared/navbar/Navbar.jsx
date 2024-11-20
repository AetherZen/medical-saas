import Link from "next/link";
import ButtonFilled from "../ButtonFilled/ButtonFilled";

const Navbar = () => {
  const navItems = [
    {
      navItem: "Home",
      route: "/",
    },
    {
      navItem: "Specialties ",
      route: "/specialties ",
    },
    {
      navItem: "Services",
      route: "/services",
    },
    {
      navItem: "About us",
      route: "/about-us",
    },
    {
      navItem: "Blog",
      route: "/blog",
    },
  ];
  return (
    <div className="max-content-width section-padding-x">
      <div className="flex  justify-between">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <ul className="flex items-center gap-16">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  className="font-semibold text-[#121212]"
                  href={item?.route}
                >
                  {item?.navItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ButtonFilled text="Book Schedule" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
