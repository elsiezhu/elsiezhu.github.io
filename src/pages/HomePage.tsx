import { Box, Header, Heading, Main, Page, PageContent, Paragraph, Text } from 'grommet';
import React from 'react';
import { ConstructionIcon } from '../icons/Icons';

export default function HomePage(): JSX.Element {
    
    return (
        <Box pad="large" background={"background-front"} height="large">
            <Page kind="wide" gap="small">
                <PageContent background={"background-front"} direction="column" gap="none">
                    <Heading level={1} size="medium" alignSelf='center' margin="small">
                        this page is under construction
                    </Heading>
                    <Text size="large" alignSelf='center'>
                        check back soon!
                    </Text>
                </PageContent>
            </Page>
        </Box>
    );
}