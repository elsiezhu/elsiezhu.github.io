import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

export function GitHubIcon(): ReactNode {
    return (
        <FontAwesomeIcon size="lg" icon={icon({name: 'github', style: 'brands'})} />
    );
}

export function LinkedInIcon(): ReactNode {
    return (
        <FontAwesomeIcon size="lg" icon={icon({name: 'linkedin', style: 'brands'})} />
    );
}

export function MailIcon(): ReactNode {
    return (
        <FontAwesomeIcon size="lg" icon={icon({name: 'envelope', style: 'regular'})} />
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