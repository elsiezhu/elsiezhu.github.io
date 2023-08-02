import React, { ReactNode } from 'react';
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    Button,
    Link
} from "@nextui-org/react";
import { GitHubIcon, LinkedInIcon, MailIcon } from '../icons/Icons';

export default function TopNavBar(): JSX.Element {
    return (
        <Navbar 
            isBordered 
            className="bg-success-50">
            <NavbarContent>
                {BrandNavItem()}
            </NavbarContent>

            {/* center menu items */}
            <NavbarContent className="sm:flex gap-4" justify="center">
                {MenuNavItem("About Me", "/#/about")}
                {MenuNavItem("Experience", "/#/experience")}
                {MenuNavItem("Projects", "/#/projects")}
            </NavbarContent>
            
            {/* right menu items */}
            <NavbarContent justify="end">
                {SocialNavItem("LinkedIn", "https://www.linkedin.com/in/elsie-zhu", LinkedInIcon())}
                {SocialNavItem("GitHub", "https://github.com/elsiezhu", GitHubIcon())}
                {SocialNavItem("Email", "/#/", MailIcon())}
            </NavbarContent>
        </Navbar>
    );
}

export function BrandNavItem() {
    return (
        <NavbarBrand>
            <Link isBlock size="lg" className="font-bold text-inherit" color="foreground" href="/#/">
                ELSIE ZHU
            </Link>
        </NavbarBrand>
    );
}

export function MenuNavItem(name: string, href: string): JSX.Element {
    return (
        <NavbarItem>
            <Link isBlock color="foreground" href={href}>{name}</Link>
        </NavbarItem>
    );
}

export function SocialNavItem(name: string, href: string, icon: ReactNode): JSX.Element {
    return (
        <NavbarItem>
            <Button isIconOnly as={Link} color="secondary" href={href} variant="flat" aria-label={name}>
                {icon}
            </Button>
        </NavbarItem>
    );
}


