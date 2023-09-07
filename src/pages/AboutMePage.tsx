import { Page, PageContent, Heading, Paragraph, Box, Text, Grid, Card, CardHeader, CardBody, CardFooter, ResponsiveContext } from 'grommet';
import React from 'react';
import WorldMap from '../components/WorldMap';

export default function AboutMePage(): JSX.Element {
    function columns(size: string) {
        if (size === "large") {
            return 3;
        } else if (size === "medium") {
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
                            <Card pad={{left: "medium", right: "medium", bottom: "medium"}} background="#d8f2eb" gap="none">
                                <CardHeader>
                                    <Heading level={3}>
                                        3rd Year (2023 - 2024)
                                    </Heading>
                                </CardHeader>
                                <CardBody gap="small">
                                <Text>
                                        CSC373: Algorithm Design, Analysis & Complexity
                                    </Text>
                                    <Text>
                                        CSC369: Operating Systems
                                    </Text>
                                    <Text>
                                        CSC311: Introduction to Machine Learning
                                    </Text>
                                    <Text>
                                        CSC263: Data Structures & Algorithms
                                    </Text>
                                    <Text>
                                        CSC324: Principles of Programming Languages
                                    </Text>
                                    <Text>
                                        CSC301: Introduction to Software Engineering
                                    </Text>
                                    <Text>
                                        CSC309: Programming on the Web
                                    </Text>
                                    <Text>
                                        CSC343: Introduction to Databases
                                    </Text>
                                    <Text>
                                        CSC300: Computers and Society
                                    </Text>
                                    <Text>
                                        WGS160: Introduction to Women and Gender Studies
                                    </Text>
                                    <Text>
                                        GGR272: Geographic Information and Mapping I
                                    </Text>
                                </CardBody>
                            </Card>
                            <Card pad={{left: "medium", right: "medium", bottom: "medium"}} background="#d8f2eb" gap="none">
                                <CardHeader>
                                    <Heading level={3}>
                                        2nd Year (2022 - 2023)
                                    </Heading>
                                </CardHeader>
                                <CardBody gap="small">
                                    <Text>
                                        CSC207: Software Design
                                    </Text>
                                    <Text>
                                        CSC209: Software Tools & System Programming
                                    </Text>
                                    <Text>
                                        CSC236: Introduction to the Theory of Computation
                                    </Text>
                                    <Text>
                                        CSC263: Data Structures & Algorithms
                                    </Text>
                                    <Text>
                                        CSC258: Computer Organization
                                    </Text>
                                    <Text>
                                        MAT235: Multivariable Calculus
                                    </Text>
                                    <Text>
                                        STA247: Probability with Computer Applications
                                    </Text>
                                    <Text>
                                        PHY207: Physics of Music
                                    </Text>
                                    <Text>
                                        ENT200: Innovation & Entrepreneurship
                                    </Text>
                                </CardBody>
                            </Card>
                            <Card pad={{left: "medium", right: "medium", bottom: "medium"}} background="#d8f2eb" gap="none">
                                <CardHeader>
                                    <Heading level={3}>
                                        1st Year (2021 - 2022)
                                    </Heading>
                                </CardHeader>
                                <CardBody gap="small">
                                    <Text>
                                        CSC110: Foundations of Computer Science I
                                    </Text>
                                    <Text>
                                        CSC111: Foundations of Computer Science II
                                    </Text>
                                    <Text>
                                        MAT137: Calculus with Proofs
                                    </Text>
                                    <Text>
                                        MAT223: Linear Algebra I
                                    </Text>
                                    <Text>
                                        CSB199: Biotechnology and Society
                                    </Text>
                                    <Text>
                                        PSY100: Introduction to Psychology
                                    </Text>
                                    <Text>
                                        SOC100: Introduction to Sociology
                                    </Text>
                                    <Text>
                                        GGR124: Cities and Urban Life
                                    </Text>
                                </CardBody>
                            </Card>
                        </Grid>
                    </PageContent>
                </Box>
            </Page>
        </Box>
    );
}