import { Card, CardBody, CardHeader, Heading, Text } from "grommet";
import React from "react";

export type CourseYearCardProps = {
    academicYear: string,
    startYear: number,
    endYear: number,
    courses: Object
}
export default function CourseYearCard(props: CourseYearCardProps): JSX.Element {
    return (
        <Card pad={{left: "medium", right: "medium", bottom: "medium"}} background="#d8f2eb" gap="none">
            <CardHeader>
                <Heading level={3}>
                    {`${props.academicYear} Year (${props.startYear} - ${props.endYear})`}
                </Heading>
            </CardHeader>
            <CardBody gap="small">
                {CourseToTextList(props.courses)}
            </CardBody>
        </Card>
    );
}

function CourseToTextList(coursesWithCodes: Object) {
    const courses = [];
    for (const [code, courseName] of Object.entries(coursesWithCodes)) {
        courses.push(<Text>{`${code}: ${courseName}`}</Text>);
    }
    return courses;
}