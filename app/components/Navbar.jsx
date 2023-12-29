import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function DashboardLayout({ children }) {
  return (
    <section className="fixed w-full">
      <Navbar fluid rounded>
        <NavbarBrand href="/">
          <img src="./favicon.ico" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Basic Book CRUD
          </span>
        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink href="/">Dashboard</NavbarLink>
          <NavbarLink href="/login">Logout</NavbarLink>
        </NavbarCollapse>
      </Navbar>
      <div className="m-4">{children}</div>
    </section>
  );
}
