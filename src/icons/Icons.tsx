import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export function GitHubIcon(): JSX.Element {
    return (
        <FontAwesomeIcon icon={icon({name: 'github', style: 'brands'})} />
    );
}

export function LinkedInIcon(): JSX.Element {
    return (
        <FontAwesomeIcon icon={icon({name: 'linkedin', style: 'brands'})} />
    );
}

export function MailIcon(): JSX.Element {
    return (
        <FontAwesomeIcon icon={icon({name: 'envelope', style: 'regular'})} />
    );
}

export function ConstructionIcon(): ReactNode {
    return (
        <FontAwesomeIcon icon={icon({name:'screwdriver-wrench', style: 'solid'})} />
    );
}

export function FileIcon(): ReactNode {
    return (
        <FontAwesomeIcon icon={icon({name: 'file-export', style: 'solid'})} />
    );
}

export function CloudIcon(): JSX.Element {
    return (
        <FontAwesomeIcon icon={icon({name: 'cloud-meatball', style: 'solid'})} />
    );
}