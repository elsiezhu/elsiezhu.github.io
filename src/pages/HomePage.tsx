import { Box, Header, Heading, Main, Page, PageContent, Paragraph, Text, Image, ResponsiveContext } from 'grommet';
import React from 'react';
import { ConstructionIcon } from '../icons/Icons';

export default function HomePage(): JSX.Element {
    const size = React.useContext(ResponsiveContext);
    
    return (
        <PageContent 
            background={"background-front"} 
            direction="column" 
            pad={{top: 'none'}}
            width={{min: "50px", max: "100%"}}
            responsive
        >
        <Box margin={{left: "xlarge", right: "xlarge"}} background={"background-front"} responsive>
            <Page kind="wide" gap="small" responsive>
                <PageContent background={"background-front"} direction="column" gap="none" responsive>
                    <Box width={size === 'small' ? size : 'medium'} height={size === 'small' ? size : 'medium'} alignSelf="center">
                        <Image
                            fit="contain"
                            src="https://elsiezhu.github.io/me_2.PNG"
                        />
                    </Box>
                    <Heading level={1} size="large" alignSelf='center' textAlign="center" margin="small">
                        Elsie Zhu
                    </Heading>
                    <Text size="large" alignSelf='center' textAlign="center">
                        check back soon!
                    </Text>
                </PageContent>
            </Page>
        </Box>
        </PageContent>
    );
}