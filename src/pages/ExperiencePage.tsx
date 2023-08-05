import { Box, Page, PageContent, Heading, Paragraph, Text, Tag, Grid } from 'grommet';
import {Calendar, Location} from 'grommet-icons'
import React from 'react';

export default function ExperiencePage(): JSX.Element {
    return (
        <Box background={"background-front"} height="large">
            <Page kind="wide" gap="small">
                <PageContent background={"background-front"} direction="column" gap="none">
                    <Heading level={1} size="large" alignSelf='center' margin="small">
                        Experience
                    </Heading>
                    <Text size="large" alignSelf='center'>
                        a list of my internships!
                    </Text>
                </PageContent>
                <Box gap="medium" margin={{left: "xlarge", right: "xlarge"}}>
                    <PageContent 
                        background={"background-front"} 
                        direction="column" 
                        margin={{top: 'large'}} 
                        border={{side: 'top', size: 'medium'}} 
                        pad={{top: 'medium'}}
                    >
                        <Grid columns={{count: 2, size: 'auto'}} gap="small">
                            <Box>
                                <Heading level={2} alignSelf="left" margin={{bottom: "none"}} color="brand">
                                    Amazon
                                </Heading>
                                <Heading level={2} alignSelf="left" margin={{top: "xsmall", bottom: "small"}}>
                                    Software Development Engineer Intern
                                </Heading>
                                <Box direction="row" gap="small" margin={{bottom: "small"}}>
                                    <Location size="medium" />
                                    <Text alignSelf='left'>
                                        Toronto, Ontario, Canada
                                    </Text>
                                </Box>
                                <Box direction="row" gap="small">
                                    <Calendar size="medium" />
                                    <Text alignSelf='left'>
                                        May 2023 - July 2023 (12 weeks)
                                    </Text>
                                </Box>
                            </Box>
                            <Box direction='column' gap='small' margin={{top: "large"}}>
                                <Text>
                                    I worked on a Software Development team within Amazon Fulfillment Technologies. 
                                    (to be continued...)
                                </Text>
                            </Box>
                        </Grid>
                    </PageContent>

                    <PageContent 
                        background={"background-front"} 
                        direction="column" 
                        margin={{top: 'large', bottom: 'xxlarge'}} 
                        border={{side: 'top', size: 'medium'}} 
                        pad={{top: 'medium'}}
                    >
                        <Grid columns={{count: 2, size: 'auto'}} gap="small" margin={{bottom: "xlarge"}}>
                            <Box>
                                <Heading level={2} alignSelf="left" margin={{bottom: "none"}} color="brand">
                                    Bell Canada
                                </Heading>
                                <Heading level={2} alignSelf="left" margin={{top: "xsmall", bottom: "small"}}>
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
                                    I worked on a DevOps team to develop a project that integrates Jenkins regression test suites with Jira 
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
}