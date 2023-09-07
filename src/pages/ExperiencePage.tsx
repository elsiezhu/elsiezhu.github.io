import { Box, Page, PageContent, Heading, Paragraph, Text, Tag, Grid, ResponsiveContext, Main } from 'grommet';
import React from 'react';
import ExperienceSection from '../components/ExperienceSection';

export default function ExperiencePage(): JSX.Element {
    return (
        <ResponsiveContext.Consumer>
            {(size) => {
                return(
                    <Box background={"background-front"} margin="none">
                        <Page>
                            <PageContent background={"background-front"} direction="column" gap="none" width={{min: "50px", max: "100%"}} responsive>
                                <Heading level={1} size="large" alignSelf='center' textAlign="center" margin="small" responsive>
                                    Experience
                                </Heading>
                                <Text size={"large"} alignSelf='center' textAlign="center">
                                    a list of my internships!
                                </Text>
                            </PageContent>

                            <Box direction="column" gap="none" margin={{left: "xlarge", right: "xlarge"}} responsive>
                                <ExperienceSection 
                                    size={size} 
                                    company="Amazon" 
                                    role="Software Development Engineer Intern" 
                                    location="Toronto, Ontario, Canada" 
                                    startDate='May 2023' endDate='July 2023' 
                                    length='12 weeks' 
                                    description='I worked on a Software Development team within Amazon Fulfillment Technologies. (to be continued...)' 
                                    topMargin='large'
                                />

                                <ExperienceSection 
                                    size={size} 
                                    company='Bell Canada' 
                                    role='Technical Specialist Intern' 
                                    location='Missisauga, Ontario, Canada' 
                                    startDate='May 2022' endDate='August 2022' 
                                    length='16 weeks' 
                                    description='I worked on a DevOps team to develop an automation project that integrates Jenkins regression test suites with Jira 
                                                to automatically raise issues according to regression test results, which reduced manual effort by 5+ hours per week. 
                                                I implemented backend algorithms and automation scripts using Python.'
                                    topMargin='none'
                                />
                            </Box>
                        </Page>
                    </Box>
                );
            }}
        </ResponsiveContext.Consumer>
    );
}