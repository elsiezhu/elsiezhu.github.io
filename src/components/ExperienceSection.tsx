import { Box, Grid, Heading, PageContent, Text } from "grommet";
import {Calendar, Location} from 'grommet-icons'
import React from "react";

export type ExperienceSectionProps = {
    size: string,
    company: string,
    role: string,
    location: string,
    startDate: string,
    endDate: string,
    length: string,
    description: string
    topMargin: string
}
export default function ExperienceSection(props: ExperienceSectionProps) {
    return (
        <PageContent 
            background={"background-front"} 
            direction="column" 
            margin={{top: props.topMargin, bottom: 'large'}} 
            border={{side: 'top', size: 'medium'}} 
            pad={{top: 'medium', bottom: 'medium'}}
            width={{min: "50px", max: "100%"}}
            responsive
        >
            <Grid columns={{count: props.size === "small" ? 1 : 2, size: 'auto'}} gap="small" responsive>
                <Box responsive flex>
                    <Heading level={2} alignSelf="left" margin={{bottom: "none"}} color="brand" responsive>
                        {props.company}
                    </Heading>
                    <Heading level={2} alignSelf="left" margin={{top: "xsmall", bottom: "small"}} responsive>
                        {props.role}
                    </Heading>
                    <Box direction="row" gap="small" margin={{bottom: "small"}} responsive>
                        <Location size="medium" />
                        <Text alignSelf='left'>
                            {props.location}
                        </Text>
                    </Box>
                    <Box direction="row" gap="small" responsive>
                        <Calendar size="medium" />
                        <Text alignSelf='left'>
                            {`${props.startDate} - ${props.endDate} (${props.length})`}
                        </Text>
                    </Box>
                </Box>
                <Box direction='column' gap='small' margin={{top: "large"}} responsive>
                    <Text>
                        {props.description}
                    </Text>
                </Box>
            </Grid>
        </PageContent>
);
}