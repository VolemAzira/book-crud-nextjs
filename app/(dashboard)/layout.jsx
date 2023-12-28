import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Navbar fluid rounded>
        <NavbarBrand href="/home">
          <img src="./favicon.ico" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Basic Book CRUD
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/home">Home</NavbarLink>
          <NavbarLink href="/">Logout</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <div className="m-4">{children}</div>
    </section>
  );
}
