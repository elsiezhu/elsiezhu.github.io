import React from 'react';
import { CloudIcon, FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../icons/Icons';
import { Anchor, Box, Header, Menu, ResponsiveContext, Button, ThemeContext } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

const anchorBorderColor = { 
    global: { 
        focus: { 
            border: {
                color: 'background-front'
            }
        } 
    }
};

export default function TopNavBar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = React.useState<boolean>(false)
    return (
        <Header background="background-front" pad="medium" height="xsmall">
            {BrandNavItem()}
            <ResponsiveContext.Consumer>
                {(size) => size === 'small' ? MenuItems() : NavItems()}
            </ResponsiveContext.Consumer>
            {SocialItems()}
        </Header>
    );
}

export function BrandNavItem() {
    return (
        <ThemeContext.Extend value={anchorBorderColor}>
            <Box justify='start' direction="row" gap="medium">
                <Anchor
                    href="/#/"
                    icon={CloudIcon()}
                    label="Elsie Zhu"
                    size="xxlarge"
                    weight="bold"
                />
            </Box>
        </ThemeContext.Extend>
    );
}

export function NavItems() {
    return (
        <Box justify="center" direction="row" gap="medium">
            <ThemeContext.Extend value={anchorBorderColor}>
                <Anchor href="/#/about" label="About Me"/>
            </ThemeContext.Extend>
            <ThemeContext.Extend value={anchorBorderColor}>
                <Anchor href="/#/experience" label="Experience"/>
            </ThemeContext.Extend>
            <ThemeContext.Extend value={anchorBorderColor}>
                <Anchor href="/#/projects" label="Projects"/>
            </ThemeContext.Extend>
            <ThemeContext.Extend value={anchorBorderColor}>
                <Anchor href="/#/" label="Resume" />
            </ThemeContext.Extend>
        </Box>
    );
}

export function SocialItems() {
    return (
        <Box justify="center" direction="row" gap="medium">
            <Button primary color="brand" plain={false} icon={LinkedInIcon()} href="https://www.linkedin.com/in/elsie-zhu" />
            <Button primary color="brand" plain={false} icon={GitHubIcon()} href="https://github.com/elsiezhu" />
            <Button primary color="brand" plain={false} icon={MailIcon()} href="mailto:elsie.zhu2003@gmail.com" />
        </Box>
    );
}

export function MenuItems() {
    return (
        <Box justify="start">
            <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                size="xlarge"
                items={[
                    {
                        label: <Box pad="small">About Me</Box>,
                        href: '/#/about',
                    },
                    {
                        label: <Box pad="small">Experience</Box>,
                        href: '/#/experience',
                    },
                    {
                        label: <Box pad="small">Projects</Box>,
                        href: '/#/projects',
                    },
                    {
                        label: <Box pad="small">Resume</Box>,
                        href: '/#/',
                    },
                ]}
            />
        </Box>
    );
}
