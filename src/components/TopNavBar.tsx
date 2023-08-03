import React, { ReactNode } from 'react';
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    Button,
    Link,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/react";
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../icons/Icons';

export default function TopNavBar(): JSX.Element {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
    const [showMenu, setShowMenu] = React.useState<boolean>(false);
    const [screenWidth, setScreenWidth] = React.useState<number>(window.innerWidth);

    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    }

    React.useEffect(() => {
      window.addEventListener("resize", handleResize, false);
    }, []);

    React.useEffect(() => {
        setShowMenu(screenWidth < 746);
    }, [screenWidth]);
    
    return (
        <Navbar 
            isBordered 
            className="bg-success-50"
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className={showMenu ? "" : "hidden"}
            />
            <NavbarContent>
                {BrandNavItem()}
            </NavbarContent>

            {/* center menu items */}
            <NavbarContent className={showMenu ? "hidden sm:flex gap-4" : "sm:flex gap-4"} justify="center">
                {MenuNavItem("About Me", "/#/about", false, setIsMenuOpen)}
                {MenuNavItem("Experience", "/#/experience", false, setIsMenuOpen)}
                {MenuNavItem("Projects", "/#/projects", false, setIsMenuOpen)}
            </NavbarContent>
            
            {/* right menu items */}
            <NavbarContent justify="end">
                {SocialNavItem("LinkedIn", "https://www.linkedin.com/in/elsie-zhu", LinkedInIcon())}
                {SocialNavItem("GitHub", "https://github.com/elsiezhu", GitHubIcon())}
                {SocialNavItem("Email", "mailto:elsie.zhu2003@gmail.com", MailIcon())}
                {ResumeNavItem()}
            </NavbarContent>

            <NavbarMenu>
                {MenuNavItem("About Me", "/#/about", true, setIsMenuOpen)}
                {MenuNavItem("Experience", "/#/experience", true, setIsMenuOpen)}
                {MenuNavItem("Projects", "/#/projects", true, setIsMenuOpen)}
            </NavbarMenu>
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

export function MenuNavItem(name: string, href: string, isMenuItem: boolean, setIsMenuOpen: (isMenuOpen: boolean) => void): JSX.Element {
    let item = <Link onPress={() => setIsMenuOpen(false)} isBlock color="foreground" href={href}>{name}</Link>;
    if (isMenuItem) {
        return (
            <NavbarMenuItem>
                {item}
            </NavbarMenuItem>
        );
    } else {
        return (
            <NavbarItem>
                {item}
            </NavbarItem>
        );
    }
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

export function ResumeNavItem(): JSX.Element {
    return (
        <NavbarItem>
            <Button as={Link} color="secondary" variant="flat" href="/#/" endContent={FileIcon()}>
                Resume
            </Button>
        </NavbarItem>
    );
}


