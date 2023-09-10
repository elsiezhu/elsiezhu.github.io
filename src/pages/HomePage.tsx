import { Box, Header, Heading, Main, Page, PageContent, Paragraph, Text, Image } from 'grommet';
import React from 'react';
import { ConstructionIcon } from '../icons/Icons';

export default function HomePage(): JSX.Element {
    
    return (
        <Box pad="large" background={"background-front"} height="large" responsive>
            <Page kind="wide" gap="small" responsive>
                <PageContent background={"background-front"} direction="column" gap="none" responsive>
                    <Heading level={1} size="medium" alignSelf='center' textAlign="center" margin="small">
                        this page is under construction
                    </Heading>
                    <Text size="large" alignSelf='center' textAlign="center">
                        check back soon!
                    </Text>
                    <Box height="small" width="small">
                        <Image
                            fit="cover"
                            src="https://elsiezhu.github.io/me_1.PNG"
                        />
                    </Box>
                </PageContent>
            </Page>
        </Box>
    );
}