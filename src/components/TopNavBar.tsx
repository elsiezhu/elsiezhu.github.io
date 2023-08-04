import React from 'react';
import { CloudIcon, FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from '../icons/Icons';
import { Anchor, Box, Header, Menu, ResponsiveContext, Button } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

export default function TopNavBar() {
    const [isNavbarCollapsed, setIsNavbarCollapsed] = React.useState<boolean>(false)
    return (
        <Header background="background-back" pad="medium" height="xsmall">
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
        <Box justify='start' direction="row" gap="medium">
            <Anchor
                href="/#/"
                icon={CloudIcon()}
                label="Elsie Zhu"
                size="xxlarge"
            />
        </Box>
    );
}

export function NavItems() {
    return (
        <Box justify="center" direction="row" gap="medium">
            <Anchor href="/#/about" label="About Me"/>
            <Anchor href="/#/experience" label="Experience"/>
            <Anchor href="/#/projects" label="Projects"/>
            <Anchor href="/#/" label="Resume" />
        </Box>
    );
}

export function SocialItems() {
    return (
        <Box justify="center" direction="row" gap="medium">
            <Button color="brand" plain={true} icon={LinkedInIcon()} href="https://www.linkedin.com/in/elsie-zhu" />
            <Button color="brand" plain={true} icon={GitHubIcon()} href="https://github.com/elsiezhu" />
            <Button color="brand" plain={true} icon={MailIcon()} href="mailto:elsie.zhu2003@gmail.com" />
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
