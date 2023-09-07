import { Page, PageContent, Heading, Paragraph, Box, Text, Grid, Card, CardHeader, CardBody, CardFooter, ResponsiveContext } from 'grommet';
import React from 'react';
import CourseYearCard from '../components/CourseYearCard';
import WorldMap from '../components/WorldMap';

const courses1 = {
    CSC110: "Foundations of Computer Science I",
    CSC311: "Foundations of Computer Science II",
    MAT137: "Calculus with Proofs",
    MAT223: "Linear Algebra I",
    CSB199: "Biotechnology and Society",
    PSY100: "Introduction to Psychology",
    SOC100: "Introduction to Sociology",
    GGR124: "Cities and Urban Life",
};

const courses2 = {
    CSC207: "Software Design",
    CSC209: "Software Tools & System Programming",
    CSC236: "Introduction to the Theory of Computation",
    CSC263: "Data Structures & Algorithms",
    CSC258: "Computer Organization",
    MAT235: "Multivariable Calculus",
    STA247: "Probability with Computer Applications",
    PHY207: "Physics of Music",
    ENT200: "Innovation & Entrepreneurship",
};

const courses3 = {
    CSC373: "Algorithm Design, Analysis & Complexity",
    CSC369: "Operating Systems",
    CSC311: "Introduction to Machine Learning",
    CSC385: "Microprocessor Systems",
    CSC324: "Principles of Programming Languages",
    CSC301: "Introduction to Software Engineering",
    CSC309: "Programming on the Web",
    CSC343: "Introduction to Databases",
    CSC300: "Computers and Society",
    WGS160: "Introduction to Women and Gender Studies",
    GGR272: "Geographic Information and Mapping I",
}
export default function AboutMePage(): JSX.Element {
    function columns(size: string) {
        if (size === "large" || size === "medium") {
            return 3;
        } else {
            return 1;
        }
    }

    const size = React.useContext(ResponsiveContext);
    return (
        <Box background={"background-front"} margin="none">
            <Page>
                <PageContent background={"background-front"} direction="column" gap="none" width={{min: "50px", max: "100%"}} responsive>
                    <Heading level={1} size="large" alignSelf='center' textAlign="center" margin="small" responsive>
                        About Me
                    </Heading>
                    <Text size={"large"} alignSelf='center' textAlign="center">
                        who i am, hobbies, courses
                    </Text>
                    {/* <WorldMap /> */}
                </PageContent>

                <Box direction="column" gap="small" margin={{left: "xlarge", right: "xlarge"}} responsive>
                    <PageContent 
                        background={"background-front"} 
                        direction="column" 
                        margin={{top: 'large', bottom: 'large'}} 
                        border={{side: 'top', size: 'medium'}} 
                        pad={{top: 'medium', bottom: 'medium'}}
                        width={{min: "50px", max: "100%"}}
                        gap="medium"
                        responsive
                    >
                        <Heading level={2} size="large" alignSelf='start' margin="small">
                            Coursework @ UofT
                        </Heading>
                        <Grid columns={{count: columns(size), size: 'auto'}} gap="medium" align='start'>
                            <CourseYearCard academicYear='3rd' startYear={2023} endYear={2024} courses={courses3} />
                            <CourseYearCard academicYear='2nd' startYear={2022} endYear={2023} courses={courses2} />
                            <CourseYearCard academicYear='1st' startYear={2021} endYear={2022} courses={courses1} />
                        </Grid>
                    </PageContent>
                </Box>
            </Page>
        </Box>
    );
}

function CourseToTextList(coursesWithCodes: Object) {
    const courses = [];
    for (const [code, courseName] of Object.entries(coursesWithCodes)) {
        courses.push(<Text>{`${code}: ${courseName}`}</Text>);
    }
    return courses;
}