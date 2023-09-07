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
    return (
        <ResponsiveContext.Consumer>
            {(size) => {
                if (size === 'small') {
                    return (
                        <Header background="background-front" pad="medium" height="xsmall">
                            <Box direction="row" gap="xsmall" align="center" justify='between'>
                                {MenuItems()}
                                {BrandNavItem(size)}
                            </Box>
                            {SocialItems(size)}
                        </Header>
                    );
                } else {
                    return (
                        <Header background="background-front" pad="medium" height="xsmall">
                            {BrandNavItem(size)}
                            {NavItems()}
                            {SocialItems(size)}
                        </Header>  
                    );
                }
            }}
        </ResponsiveContext.Consumer>
    );
}

export function BrandNavItem(size: string): JSX.Element {
    return (
        <ThemeContext.Extend value={anchorBorderColor}>
            <Box justify='start' direction="row" gap="medium">
                <Anchor
                    href="/#/"
                    icon={size === "small" ? null : CloudIcon()}
                    label="Elsie Zhu"
                    size={size === "small" ? "xlarge" : "xxlarge"}
                    weight="bold"
                />
            </Box>
        </ThemeContext.Extend>
    );
}

export function NavItems(): JSX.Element {
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

export function SocialItems(size: string): JSX.Element {
    const isSmall: boolean = size === "small";
    return (
        <Box justify="center" direction="row" gap="medium">
            {SocialButton(isSmall, LinkedInIcon(), "https://www.linkedin.com/in/elsie-zhu")}
            {SocialButton(isSmall, GitHubIcon(), "https://github.com/elsiezhu")}
            {SocialButton(isSmall, MailIcon(), "mailto:elsie.zhu2003@gmail.com")}
        </Box>
    );
}

export function MenuItems(): JSX.Element {
    return (
        <Box justify="start">
            <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', left: 'left' } }}
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

function SocialButton(isSmall: boolean, icon: JSX.Element, href: string): JSX.Element {
    return (
        <Button 
            primary={!isSmall} 
            color="brand" 
            plain={isSmall ? undefined : false} 
            size={isSmall ? "large" : "medium"}
            icon={icon} 
            href={href} 
        />
    )
}
