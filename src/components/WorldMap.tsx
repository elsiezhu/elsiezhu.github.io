import React from "react";
import {Box, WorldMap as Map} from 'grommet';

export default function WorldMap(): JSX.Element {
    return (
        <Box alignSelf="center" >
            <Map
                color="graph-0"
                continents={[
                    {
                        name: 'North America',
                        color: 'graph-1',
                        onClick: (name) => {},
                    },
                ]}
                margin="small"
                alignSelf="center"
                width="500px"
            />
        </Box>
    );
}