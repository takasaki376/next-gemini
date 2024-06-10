import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

import { ThemeSwitch } from "@/components/theme-switch";
// import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="pt-8 h-2">
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
