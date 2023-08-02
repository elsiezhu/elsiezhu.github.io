import { Card, CardBody, Spacer } from '@nextui-org/react';
import React from 'react';
import { ConstructionIcon } from '../icons/Icons';

export default function ProjectsPage(): JSX.Element {
    return (
        <div className="flex justify-center py-4">
            <Card className="bg-secondary-50">
                <CardBody>
                    <div className="flex">
                        {ConstructionIcon()}
                        <Spacer x={4} />
                        <p>This page is under construction...</p>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}