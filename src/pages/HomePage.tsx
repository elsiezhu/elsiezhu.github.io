import { Box, Header, Heading, Main, Page, PageContent, Paragraph } from 'grommet';
import React from 'react';
import { ConstructionIcon } from '../icons/Icons';

export default function HomePage(): JSX.Element {
    
    return (
        <Box pad="large" background={"background-back"} height="large">
            <Page kind="full">
                <PageContent background={"light-3"} direction="column" gap="medium">
                    <Heading alignSelf='center'>
                        this page is under construction
                    </Heading>
                    <Paragraph alignSelf='center'>
                        check back soon!
                    </Paragraph>
                </PageContent>
            </Page>
        </Box>
    );
}