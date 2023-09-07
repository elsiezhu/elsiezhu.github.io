import { Box, Page, PageContent, Heading, Paragraph, Text, Tag, Grid, ResponsiveContext, Main } from 'grommet';
import {Calendar, Location} from 'grommet-icons'
import React from 'react';

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

                            <Box direction="column" gap="small" margin={{left: "xlarge", right: "xlarge"}} responsive>
                                <PageContent 
                                    background={"background-front"} 
                                    direction="column" 
                                    margin={{top: 'large', bottom: 'large'}} 
                                    border={{side: 'top', size: 'medium'}} 
                                    pad={{top: 'medium', bottom: 'medium'}}
                                    width={{min: "50px", max: "100%"}}
                                    responsive
                                >
                                    <Grid columns={{count: size === "small" ? 1 : 2, size: 'auto'}} gap="small" responsive>
                                        <Box responsive flex>
                                            <Heading level={2} alignSelf="left" margin={{bottom: "none"}} color="brand" responsive>
                                                Amazon
                                            </Heading>
                                            <Heading level={2} alignSelf="left" margin={{top: "xsmall", bottom: "small"}} responsive>
                                                Software Development Engineer Intern
                                            </Heading>
                                            <Box direction="row" gap="small" margin={{bottom: "small"}} responsive>
                                                <Location size="medium" />
                                                <Text alignSelf='left'>
                                                    Toronto, Ontario, Canada
                                                </Text>
                                            </Box>
                                            <Box direction="row" gap="small" responsive>
                                                <Calendar size="medium" />
                                                <Text alignSelf='left'>
                                                    May 2023 - July 2023 (12 weeks)
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box direction='column' gap='small' margin={{top: "large"}} responsive>
                                            <Text>
                                                I worked on a Software Development team within Amazon Fulfillment Technologies. (to be continued...)
                                            </Text>
                                        </Box>
                                    </Grid>
                                </PageContent>

                                <PageContent 
                                    background={"background-front"} 
                                    direction="column" 
                                    margin={{bottom: 'large'}} 
                                    border={{side: 'top', size: 'medium'}} 
                                    pad={{top: 'medium'}}
                                    width={{min: "50px", max: "100%"}}
                                    responsive
                                >
                                    <Grid columns={{count: size === "small" ? 1 : 2, size: 'auto'}} gap="small" margin={{bottom: "large"}}>
                                        <Box>
                                            <Heading level={2} alignSelf="left" margin={{bottom: "none"}} color="brand" responsive>
                                                Bell Canada
                                            </Heading>
                                            <Heading level={2} alignSelf="left" margin={{top: "xsmall", bottom: "small"}} responsive>
                                                Technical Specialist Intern
                                            </Heading>
                                            <Box direction="row" gap="small" margin={{bottom: "small"}}>
                                                <Location size="medium" />
                                                <Text alignSelf='left'>
                                                    Missisauga, Ontario, Canada
                                                </Text>
                                            </Box>
                                            <Box direction="row" gap="small">
                                                <Calendar size="medium" />
                                                <Text alignSelf='left'>
                                                    May 2022 - August 2022 (16 weeks)
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box direction='column' gap='small' margin={{top: "large"}}>
                                            <Text>
                                                I worked on a DevOps team to develop an automation project that integrates Jenkins regression test suites with Jira 
                                                to automatically raise issues according to regression test results, which reduced manual effort by 5+ hours per week. 
                                                I implemented backend algorithms and automation scripts using Python.
                                            </Text>
                                        </Box>
                                    </Grid>
                                </PageContent>
                            </Box>
                        </Page>
                    </Box>
                );
            }}
        </ResponsiveContext.Consumer>
    );
}