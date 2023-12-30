"use client";

import { Navbar } from "flowbite-react";

export default function NavigationBar() {
  return (
    <section className="fixed w-full top-0">
      <Navbar>
        <Navbar.Brand href="/">
          <img src="./favicon.ico" className="mr-3 h-6 sm:h-9" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Basic Book CRUD
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">Dashboard</Navbar.Link>
          <Navbar.Link href="/login">Logout</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
}
