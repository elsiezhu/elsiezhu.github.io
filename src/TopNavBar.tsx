import React from 'react';
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    Button,
    Link
} from "@nextui-org/react";
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/Icons';

export default function TopNavBar(): JSX.Element {

    return (
        <Navbar 
            isBordered 
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
          }}>
            <NavbarContent>
                <NavbarBrand><Link size="lg" className="font-bold text-inherit" color="foreground" href="/#/">ELSIE ZHU</Link></NavbarBrand>
            </NavbarContent>

            {/* center menu items */}
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link isBlock color="foreground" href="/#/about">About Me</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock href="/#/experience" color="foreground">Experience</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link isBlock color="foreground" href="/#/projects">Projects</Link>
                </NavbarItem>
            </NavbarContent>
            
            {/* right menu items */}
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button isIconOnly as={Link} color="primary" href="https://www.linkedin.com/in/elsie-zhu" variant="flat" aria-label="LinkedIn">
                        {LinkedInIcon()}
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button isIconOnly as={Link} color="primary" href="https://github.com/elsiezhu" variant="flat" aria-label="GitHub">
                        {GitHubIcon()}
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button isIconOnly as={Link} color="primary" href="/" variant="flat" aria-label="Email">
                        {MailIcon()}
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
      );
}
